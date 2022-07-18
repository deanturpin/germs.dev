# Operating systems

## OS scheduling strategies
[OS process scheduling algorithms](https://www.tutorialspoint.com/operating_system/os_process_scheduling_algorithms.htm)

- First-Come, First-Served (FCFS) Scheduling
- Shortest-Job-Next (SJN) Scheduling
- Priority Scheduling
- Shortest Remaining Time
- Round Robin (RR) Scheduling
- Multiple-Level Queues Scheduling

These algorithms are either non-preemptive or preemptive. Non-preemptive algorithms are designed so that once a process enters the running state, it cannot be preempted until it completes its allotted time, whereas the preemptive scheduling is based on priority where a scheduler may preempt a low priority running process anytime when a high priority process enters into a ready state.

### Preemption
Preemption is the act of temporarily interrupting a task being carried out by a computer system, without requiring its cooperation, and with the intention of resuming the task at a later time. Such changes of the executed task are known as context switches. It is normally carried out by a privileged task or part of the system known as a preemptive scheduler.

- User mode and kernel mode
- The period of time for which a process is allowed to run in a preemptive multitasking system is generally called the time slice or quantum.
- CPU / memory / IO bound
- [wiki/Preemption](https://en.wikipedia.org/wiki/Preemption_(computing))

### Preemption in the Linux kernel
See [wiki/Linux preemption](https://en.wikipedia.org/wiki/Linux_kernel#Preemption).

The Linux kernel contains different scheduler classes. By default the kernel uses a scheduler mechanism called the Completely Fair Scheduler introduced in the 2.6.23 version of the kernel. Internally this default-scheduler class is also known as SCHED_OTHER, but the kernel also contains two POSIX-compliant real-time scheduling classes named SCHED_FIFO (realtime first-in-first-out) and SCHED_RR (realtime round-robin), both of which take precedence over the default class.

Through the use of the real-time Linux kernel patch PREEMPT_RT, support for full preemption of critical sections, interrupt handlers, and "interrupt disable" code sequences can be supported. Partial mainline integration of the real-time Linux kernel patch already brought some functionality to the kernel mainline. Preemption improves latency, increases responsiveness, and makes Linux more suitable for desktop and real-time applications. Older versions of the kernel had a so-called big kernel lock for synchronization across the entire kernel, which was finally removed by Arnd Bergmann in 2011.

### Scheduling strategies in the Linux kernel
See [man page](http://man7.org/linux/man-pages/man7/sched.7.html).

Normal operation - priority is not used

- SCHED_OTHER
- SCHED_IDLE
- SCHED_BATCH

Realtime policies - fixed priority

- SCHED_FIFO (no timeslicing, process must yield)
- SCHED_RR (round robin, like FIFO but each thread is only allowed to run for a maximum quantum)
- [SCHED_DEADLINE](https://en.wikipedia.org/wiki/Earliest_deadline_first_scheduling)

## Memory
| Top of RAM | |
| ---------- | ----------------------- |
| STACK | Statically allocated |
| HEAP | Dynamically allocated |
| BSS | Uninitialised data |
| DATA | Initialised data |
| TEXT | Executable instructions |
| | 0 |

BSS - all globals and statics that do not have explicit initialisation in the source code.

## Heap and stack
The OS allocates the stack for each system-level thread when the thread is created. Typically the OS is called by the language runtime to allocate the heap for the application.

The stack is attached to a thread, so when the thread exits the stack is reclaimed. The heap is typically allocated at application startup by the runtime, and is reclaimed when the application (technically process) exits.

The size of the stack is set when a thread is created. The size of the heap is set on application startup, but can grow as space is needed (the allocator requests more memory from the operating system).

The stack is faster because the access pattern makes it trivial to allocate and deallocate memory from it (a pointer/integer is simply incremented or decremented), while the heap has much more complex bookkeeping involved in an allocation or deallocation. Also, each byte in the stack tends to be reused frequently which means it tends to be mapped to the processor's cache, making it fast. Another performance hit for the heap is that the heap, being mostly a global resource, typically has to be multi-threading safe, i.e. each allocation and deallocation needs to be - typically - synchronized with "all" other heap accesses in the program.

## Branching
You could have a branch that's taken in 99% of the cases, but has a different destination every time, or a branch that's taken 50% of the time but almost always jumps to the same place.

The purpose of the branch predictor is to improve the flow in the instruction pipeline.

## References
- [The microarchitecture of Intel, AMD and VIA CPUs](https://www.agner.org/optimize/microarchitecture.pdf)
- [Branch predictor](https://en.wikipedia.org/wiki/Branch_predictor)
- [Branch target predictor](https://en.wikipedia.org/wiki/Branch_target_predictor)
- [Speculative execution](https://en.wikipedia.org/wiki/Speculative_execution)
- [Kernel page](https://en.wikipedia.org/wiki/Kernel_page)
- [Indirect branch](https://en.wikipedia.org/wiki/Indirect_branch)
- [Branch versus branch target prediction](https://stackoverflow.com/questions/22508211/branch-target-prediction-vs-branch-prediction)
