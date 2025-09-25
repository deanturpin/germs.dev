# Random

# Via the (Linux) filesystem

```cpp
int r;
std::ifstream("/dev/urandom").read(reinterpret_cast<char*>(&r), sizeof r);
```

```cpp
char r;
std::ifstream{"/dev/urandom"} >> r;
```

# STL
## Uniform random bit generators
- uniform_random_bit_generator

## Engines and engine adaptors
- linear_congruential_engine
- mersenne_twister_engine
- subtract_with_carry_engine
- discard_block_engine
- independent_bits_engine
- shuffle_order_engine

## Non-deterministic generator
- random_device

## Distributions
### Uniform distributions
- uniform_int_distribution
- uniform_real_distribution
- generate_canonical

### Bernoulli distributions
- bernoulli_distribution
- binomial_distribution
- negative_binomial_distribution
- geometric_distribution

### Poisson distributions
- poisson_distribution
- exponential_distribution
- gamma_distribution
- weibull_distribution
- extreme_value_distribution

### Normal distributions
- normal_distribution
- lognormal_distribution
- chi_squared_distribution
- cauchy_distribution
- fisher_f_distribution
- student_t_distribution

### Sampling distributions
- discrete_distribution
- piecewise_constant_distribution
- piecewise_linear_distribution

## References
- https://en.cppreference.com/w/cpp/numeric/random/rand

