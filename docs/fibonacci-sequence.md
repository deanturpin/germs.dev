# The Fibonacci Sequence

## Bash

```bash
#!/bin/bash

function fibonacci {

local n=$1

[[ $n == 0 ]] && echo $n && return
[[ $n == 1 ]] && echo $n && return

local x=$(fibonacci $((n - 1)))
local y=$(fibonacci $((n - 2)))

echo $((x + y))
}

echo -e sh\t$(fibonacci 14)
```

## C

```c
#include <stdio.h>

unsigned int fibonacci(const unsigned int);

int main()
{
printf("ct%dn", fibonacci(14));

return 0l;
}

unsigned int fibonacci(const unsigned int n)
{

return (
n < 2 ? n :
fibonacci( n - 1ul ) + fibonacci( n - 2ul )
);
}
```

## Haskell

```haskell
#!/usr/bin/runhaskell

fibonacci :: Int -> Int
fibonacci 0 = 0
fibonacci 1 = 1
fibonacci n = fibonacci (n - 1) + fibonacci (n - 2)

main = putStrLn ("hst" ++ show (fibonacci 14))
```

## Lua

```lua
#!/usr/bin/lua5.3

function fibonacci(n)

if n < 2 then return n end
return fibonacci(n - 1) + fibonacci(n - 2)
end

print("lua", fibonacci(14))
```
