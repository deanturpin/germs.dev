---
tags:
  - cpp
  - programming-languages
  - operating-systems
  - hardware
  - reliability
  - testing
---

# Detecting and Mitigating "Mercurial Cores" on Linux (C++ Focused)

Based on: *Cores That Don't Count* — Hochschild et al., HotOS '21
<https://sigops.org/s/conferences/hotos/2021/papers/hotos21-s01-hochschild.pdf>

---

## 🧠 Overview

Some CPU cores in the field silently produce **wrong results** instead of crashing — they "lie".
These *mercurial cores* exhibit fail-silent Corruption Execution Errors (CEEs): computation errors that produce incorrect results without triggering hardware fault detection mechanisms.

### Key Characteristics

- **Rare but catastrophic**: Occurring in a few cores per several thousand machines, but a single defective execution can corrupt databases, indexes, or results without warning
- **Silent failures**: Violations of the fundamental assumption that hardware errors are fail-stop
- **Non-reproducible**: CEEs manifest non-deterministically, requiring specific environmental conditions (voltage, temperature, frequency, aging)
- **Data-pattern dependent**: Corruption rates vary with specific data patterns
- **Resistant to fixes**: Cannot always be mitigated by microcode updates

### Real-world Symptoms from Google's Fleet

- Lock semantics violations causing application crashes
- Vector and coherence operation corruption
- Deterministic AES computation errors (one core corrupted encryption such that only it could decrypt what it had wrongly encrypted)
- Garbage collection failures leading to data loss
- Non-deterministic database query results across replicas
- Repeated bit-flips at specific positions
- Kernel state corruption

### Why This Matters for C++ Development

CEEs are **significantly harder to detect than storage/network corruption** because:

- Storage/network errors amortise checking costs across large data chunks
- Computational errors require checking at instruction granularity
- Per-instruction overhead makes detection expensive

---

## 🧩 1. Detecting Mercurial Cores on Linux

### The Detection Challenge

Mercurial cores are fundamentally difficult to detect because:

1. **They don't trigger hardware exceptions** — no MCE (Machine Check Exception) events
2. **Errors are non-deterministic** — may only appear under specific workloads or environmental conditions
3. **No single test catches them** — they passed manufacturing tests and operate "within spec"

### 🔧 System-level Monitoring

**Enable and monitor MCE logging (though CEEs often bypass these):**

```bash
sudo modprobe mce
sudo modprobe mce_inject   # optional for testing
dmesg | grep -i mce
journalctl -k | grep "Machine check"
```


**Install and configure rasdaemon** (RAS = Reliability, Availability, Serviceability):

```bash
# Install hardware error monitoring daemon
sudo apt install rasdaemon

# Enable and start the service
sudo systemctl enable rasdaemon
sudo systemctl start rasdaemon

# Check for logged errors
sudo ras-mc-ctl --summary
sudo ras-mc-ctl --errors

# Monitor logs
journalctl -u rasdaemon -f
```

rasdaemon logs hardware errors including memory errors, PCIe errors, and MCE events. While it won't catch all mercurial core behaviour (CEEs are silent), it provides valuable baseline monitoring for hardware reliability.

### 🧪 C++ Test Harness for Core Validation

**Comprehensive per-core test** — run identical workloads on all cores and compare results:

```cpp
#include <iostream>
#include <vector>
#include <thread>
#include <cmath>
#include <format>
#include <sched.h>

double workload(int id) {
    double sum = 0;
    for (int i = 0; i < 5'000'000; ++i)
        sum += std::sin(i * 0.001) * std::cos(i * 0.002 + id);
    return sum;
}

void test_core(int cpu) {
    cpu_set_t set;
    CPU_ZERO(&set);
    CPU_SET(cpu, &set);
    sched_setaffinity(0, sizeof(set), &set);

    double result = workload(cpu);
    std::println("CPU {:>2}: result = {:.12f}", cpu, result);
}

int main() {
    unsigned n = std::thread::hardware_concurrency();
    std::println("Detected {} logical CPUs", n);

    std::vector<std::thread> threads;
    for (unsigned i = 0; i < n; ++i)
        threads.emplace_back(test_core, i);

    for (auto &t : threads) t.join();

    std::println("✅ All cores tested — compare results for anomalies.");
}
```


**Cross-core verification** — compute on one core, verify on another:

```cpp
#include <thread>
#include <cassert>
#include <format>
#include <iostream>
#include <sched.h>

auto compute() {
    // Deterministic computation
    double s = 0;
    for (int i = 0; i < 1'000'000; ++i)
        s += std::sin(i) * std::cos(i);
    return s;
}

int main() {
    auto result1 = compute();

    cpu_set_t set;
    CPU_ZERO(&set);
    CPU_SET(1, &set); // Switch to core 1 for verification

    std::thread verifier([&]() {
        sched_setaffinity(0, sizeof(set), &set);
        auto result2 = compute();
        if (std::abs(result1 - result2) > 1e-9)
            std::println("❌ Cross-core mismatch detected!");
        else
            std::println("✅ Cross-core verification passed.");
    });

    verifier.join();
}
```


**Check which CPU core is running** — minimal example for debugging:

```cpp
#include <iostream>
#include <format>
#include <sched.h>

int main() {
    int cpu = sched_getcpu();
    std::println("Running on CPU: {}", cpu);
}
```


**Usage recommendations:**
- Run these tests periodically as part of system health checks
- Integrate into CI/CD pipelines for bare-metal deployments
- Log results and monitor for drift over time
- Consider temperature and load variations when interpreting results
- Combine with stress testing to trigger environmental conditions

### 🔥 Stress Testing with stress-ng

Use stress-ng to trigger environmental conditions that may expose mercurial core behaviour:

```bash
# Install stress-ng
sudo apt install stress-ng

# CPU stress test with verification
# Uses all CPUs with built-in result verification
stress-ng --cpu 0 --verify --timeout 2m

# Floating-point heavy workload (matrix operations)
# More likely to expose numerical computation errors
stress-ng --matrix 0 --timeout 2m

# Combined stress test
stress-ng --cpu 0 --matrix 0 --verify --timeout 5m

# Target specific CPU cores
stress-ng --cpu 4 --taskset 0,1,2,3 --verify --timeout 2m
```


**Why stress-ng helps:**
- Increases temperature and power draw, potentially triggering marginal hardware
- High instruction throughput exercises more silicon pathways
- `--verify` flag checks computational correctness
- Floating-point operations (matrix) particularly sensitive to CEEs

**Recommended approach:**
1. Run stress-ng with `--verify` as baseline health check
2. Monitor for verification failures or unexpected results
3. Correlate failures with specific cores using `taskset`
4. Cross-reference with rasdaemon logs and system temperature

### Application-level Detection Strategies

**1. Cross-replica consistency checks** (for distributed systems)

```cpp
// Compare results across multiple replicas
auto validate_computation(std::span<const Result> replicas) -> std::optional<Result> {
    if (replicas.size() < 2)
        return {};

    auto reference = replicas[0];
    for (auto i = 1uz; i < replicas.size(); ++i)
        if (replicas[i] != reference)
            return {}; // Inconsistency detected

    return reference;
}
```


**2. Redundant computation** (factor of 2× overhead)

```cpp
// Compute twice and compare
auto checked_compute(const Input& data) -> std::optional<Result> {
    auto result1 = compute(data);
    auto result2 = compute(data);

    return (result1 == result2) ? std::optional{result1} : std::nullopt;
}
```


**3. Invariant checking** (exploit domain knowledge)

```cpp
// Use mathematical properties to validate results
auto validate_fft(std::span<const Complex> input,
                  std::span<const Complex> fft_output) -> bool {
    // Parseval's theorem: energy preserved in frequency domain
    auto time_energy = std::transform_reduce(
        input.begin(), input.end(), 0.0,
        std::plus{}, [](auto c) { return std::norm(c); });

    auto freq_energy = std::transform_reduce(
        fft_output.begin(), fft_output.end(), 0.0,
        std::plus{}, [](auto c) { return std::norm(c); });

    auto tolerance = 1e-6 * time_energy;
    return std::abs(time_energy - freq_energy / input.size()) < tolerance;
}
```


#### 4. Monitoring non-determinism

```cpp
// Track unexpected variations in deterministic computations
struct ComputationMonitor {
    std::unordered_map<Input, Result> expected_results;

    auto check_determinism(const Input& in, const Result& out) -> bool {
        if (auto it = expected_results.find(in); it != expected_results.end())
            return it->second == out;

        expected_results[in] = out;
        return true; // First time seeing this input
    }
};
```

---

## 🛡️ 2. Mitigation Strategies

### Hardware-level Approaches

**Triple Modular Redundancy (TMR)** — requires 3× computation with voting:
- Three parallel executions on different cores
- Majority voting determines correct result
- Can correct single-core errors
- Substantial overhead (3× compute, synchronisation cost)

**Core isolation** — remove suspect cores from scheduling:

```bash
# Disable CPU core 7
echo 0 | sudo tee /sys/devices/system/cpu/cpu7/online

# Verify
lscpu --extended
```

### Software-level Strategies

**1. Architecture shift**: Prefer simpler processor designs
- ARM-based processors (AWS Graviton) over complex x86
- Energy efficiency gains may correlate with reduced CEE exposure
- Simpler pipelines and execution units = fewer failure modes

**2. Critical path protection**: Apply expensive checks selectively

```cpp
// Only validate critical operations
enum class ValidationLevel { None, Basic, Paranoid };

template<ValidationLevel Level = ValidationLevel::None>
auto encrypt_data(std::span<const std::byte> plaintext) -> std::vector<std::byte> {
    auto ciphertext = aes_encrypt(plaintext);

    if constexpr (Level == ValidationLevel::Paranoid) {
        // Decrypt and verify for critical operations
        auto decrypted = aes_decrypt(ciphertext);
        if (decrypted != plaintext)
            throw std::runtime_error("Encryption validation failed");
    }

    return ciphertext;
}
```


#### 3. Checksums and error detection codes

```cpp
// Add CRC32 to computational results
struct ValidatedResult {
    Result data;
    std::uint32_t checksum;

    static auto compute(const Input& in) -> ValidatedResult {
        auto result = expensive_computation(in);
        auto crc = compute_crc32(std::as_bytes(std::span{&result, 1}));
        return {result, crc};
    }

    auto validate() const -> bool {
        auto expected = compute_crc32(std::as_bytes(std::span{&data, 1}));
        return checksum == expected;
    }
};
```

---

## 📊 3. Measurement and Focus Areas for C++ on Linux

### What to Measure

**1. Result consistency** across runs and cores

```bash
# Benchmark deterministic computation across all cores
for core in $(seq 0 $(nproc --all)); do
    taskset -c $core ./benchmark > results_core_${core}.txt
done

# Compare outputs
md5sum results_core_*.txt | sort | uniq -c
```


#### 2. Core-specific failure rates

```cpp
// Track errors per core
struct CoreMetrics {
    std::atomic<std::size_t> computations{0};
    std::atomic<std::size_t> validation_failures{0};

    auto failure_rate() const -> double {
        auto total = computations.load();
        return total > 0 ?
            static_cast<double>(validation_failures.load()) / total : 0.0;
    }
};

inline auto per_core_metrics =
    std::array<CoreMetrics, 128>{}; // Adjust size as needed

void record_computation_result(bool validation_passed) {
    auto core = sched_getcpu();
    if (core >= 0 and core < per_core_metrics.size()) {
        per_core_metrics[core].computations.fetch_add(1);
        if (not validation_passed)
            per_core_metrics[core].validation_failures.fetch_add(1);
    }
}
```


#### 3. Environmental correlation

```bash
# Monitor CPU temperature and frequency during suspect behaviour
watch -n 1 'paste <(cat /sys/class/thermal/thermal_zone*/type) \
                   <(cat /sys/class/thermal/thermal_zone*/temp) | \
            column -s $"\t" -t'

# CPU frequency
watch -n 1 'grep "cpu MHz" /proc/cpuinfo'
```

### Focus Areas for C++ Development

**1. Lock-free data structures** — particularly vulnerable to CEEs
- Lock semantics violations are a documented symptom
- Consider adding validation to critical sections
- Test on diverse hardware configurations

#### 2. Cryptographic operations
- CEEs can cause deterministic encryption errors
- Always validate critical crypto operations
- Consider hardware alternatives (AES-NI) with TMR for high-security contexts

#### 3. Numerical computations
- Vector operations are vulnerable
- Use invariant checking (conservation laws, symmetries)
- Cross-validate critical results

#### 4. Database and index operations
- Non-deterministic query results are a red flag
- Implement consistency checks across replicas
- Hash-based validation for critical index operations

---

## 🎯 Practical Recommendations

### For Production C++ Systems

1. **Assume hardware can lie** — design validation into critical paths
2. **Cross-validate across replicas** when possible
3. **Monitor for non-determinism** in deterministic computations
4. **Track per-core metrics** to identify suspect hardware
5. **Use invariant checking** to detect corruption cheaply
6. **Consider architecture tradeoffs** — simpler CPUs may be more reliable

### When to Worry

- Large-scale deployments (thousands of servers)
- Critical correctness requirements (finance, cryptography, databases)
- Long-running computations where silent corruption compounds
- Lock-free concurrent algorithms
- Numerically intensive workloads

### When Not to Worry

- Small deployments (few machines)
- Short-lived processes with external validation
- Applications with strong end-to-end checksums
- Systems with comprehensive integration testing

---

## 📚 Further Reading

- Paper: <https://sigops.org/s/conferences/hotos/2021/papers/hotos21-s01-hochschild.pdf>
- Google Research: <https://research.google/pubs/cores-that-dont-count/>
- Analysis: <http://muratbuffalo.blogspot.com/2021/06/cores-that-dont-count.html>

