# Haskell cheat sheet

Also see [this Haskell cheat sheet](https://jutge.org/doc/haskell-cheat-sheet.pdf).

```haskell
-- Built-in types
Int
Integer
Bool
Char
String
Float
Double

reverse
maximum
minimum

-- subset
take
drop

let
in
where
do

-- printing
putStrLn
putStr
print

error

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
elem
length
!! n

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
