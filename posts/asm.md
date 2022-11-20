# Assembly

```bash
g++ main.cxx -O2 -std=c++23 -c -S -o - | c++filt | grep -vE '\s+\.'
```

## References
- https://queue.acm.org/detail.cfm?id=3372264

