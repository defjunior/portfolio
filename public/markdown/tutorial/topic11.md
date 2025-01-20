### Dictionaries

Dictionaries are a type of data very similar to arrays.
if you can recall, Arrays are indexed by numbers only in sequential order
Arrays can be "looked through" using the pairs function, and the length of an array can be read using #nameOfArray
However, dictionaries are a bit different

Dictionaries can a multitude of indices, meaning if you had a dictionary like
```lua
local dict = {}
dict["one"] = 1
```
You would be able to read the number value 1 from
```lua
print(dict["one"]) -- the "one" is a string value with three letters
```
Dictionaries can also use many more types of indices other than string values, and indices in a dictionary are generally called **keys**
Dictionaries can also use multiple types of indices at the same time, you can use numbers and strings at the same time, creating a **mixed table**
Dictionaries are typed out in a variety of ways
```lua
local dict = {}
dict.one = 1
local dict2 = {
  one = 1,
  two = 2
}
local dict3 = {
["one"] = 1,
["two"] = 2
}
```
Accessing the values from keys in a dictionary is either
```lua
dict["one"]
or
dict.one
```
Both ways would give you the same value associated with the three letter string ("one")
Whenever you want to set values in a dictionary, you should do it by treating the dictionary key as a variable
```lua
dict["one"] = 1
```
### Relevant Links
[https://create.roblox.com/docs/tutorials/fundamentals/coding-5/intro-to-dictionaries](https://create.roblox.com/docs/tutorials/fundamentals/coding-5/intro-to-dictionaries)