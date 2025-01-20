
### Arrays
An array is a numbered list of objects, they differ from their counterparts, which are
dictionaries, that are unable to be indexed fully by numbers, 
and have **keys **that are non-numbers
Arrays are a type of **table**, which refers to any datatype that stores things in a key-value pair

You can create an array using curly braces
```lua
local newArr = {"element one","element two"}
```
You can access an element of an array using square braces
Here, the number is the "index" at which we are accessing a value
```lua
local elementone = newArr[1]
```
You can also use newArr[1] and treat that directly as if it were a variable
```lua
print(newArr[1]) -- Output: element one
```
You can modify an array by setting the value at an index to something else
```lua
newArr[2] = "element three"
print(newArr[2])
```
You can remove and add elements from an array using the **table** library
```lua
local scores = {10, 20, 30}
table.insert(scores, 2, 15)  -- Inserts 15 at index 2
print(scores[2])  -- Output: 15
print(scores) -- Output: 10, 15, 20, 30
print(#scores) -- Output: 4, which is the length of the array, or how many elements it has
```
```lua
local tools = {"Hammer", "Wrench", "Screwdriver"}
table.remove(tools, 2)  -- Removes the element at index 2
print(tools[2])  -- Output: Screwdriver
print(tools) -- Output : Hammer, Screwdriver
```
Arrays are a general purpose way of storing associated bits of data, 
as they can contain any other datatype as values
They're pretty essential, and its guaranteed that whatever your making could be simplified with an array
There are countless examples where arrays save time writing out pointless repetition of lines, a big rule in programming is the don't repeat yourself rule
which essentially means that you should avoid rewriting identical lines of code as much as possible

Arrays are most powerful when they are used to evaluate things iteratively, they can handle large amounts of data with a relatively compact amount of code in comparison
**Iteration** is the process of checking things in a list one by one
It's widely used to process the data inside of arrays
```lua
local shapes = {"Circle", "Square", "Triangle"}

for i = 1, #shapes,1 do -- this is a form of numbered for loop,
    print(shapes[i])
end

for i = 1,10,1 do -- the first number is where it starts, the second is where it ends, and the third is the increment
  print(i) -- prints 1, 2, 3.. including 10 then stops
end

-- Using pairs for iteration
for index, value in pairs(shapes) do -- Pairs essentially gives you a key value pair, but can only evaluate two at a time, hence the name
    print(index, value)
end
 -- The "GetChildren" method returns an array
for i,v in pairs(part:GetChildren()) do
  print(b:GetFullName()) -- the "GetFullName" method returns the directory 
end

```
Arrays can even contain themselves

```lua
-- A two-dimensional array
local matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
}

print(matrix[1][2])  -- Output: 2
print(matrix[3][1])  -- Output: 7
```
### Relevant Links
[https://www.lua.org/pil/11.html](https://www.lua.org/pil/11.html)
[https://www.lua.org/pil/3.6.html](https://www.lua.org/pil/3.6.html)
[https://create.roblox.com/docs/tutorials/fundamentals/coding-5/intro-to-arrays](https://create.roblox.com/docs/tutorials/fundamentals/coding-5/intro-to-arrays)
[https://create.roblox.com/docs/tutorials/fundamentals/coding-5/landing](https://create.roblox.com/docs/tutorials/fundamentals/coding-5/landing)