# Haskell cheat sheet

```haskell
-- Built-in types
Int
Integer
Bool
Char
String
Float
Double

-- 
reverse
maximum
minimum

-- subset
take
drop

head
tail
last

repeat
cycle
replicate

sum
null
product

-- list elements
elem -- contains
length
!! n -- element at index

odd
even

-- splitting a pair
fst
snd

-- comparison
compare

-- combining lists
zip

-- printing non-strings
show
read

-- operating on a list: list comprehensions
[ x * y | x <- [1,2], y <- [10,100], x*y >= 100 ]
removeLowercase xs = [ c | c <- xs, elem c ['a'..'z'] ]
```