
Control Structures are the actual computing part of scripting, it involves setting up a system of these statements :
* If
* else
* elseif
* repeat
* until
* while
And many other statements, as they are all essential to making things work in certain conditions
### if Statement
An If statement runs the following code only when the **condition **is true
You can see the **condition** next to the if statement
```lua
local createdPart = Instance.new("Part")
if createdPart.BrickColor == BrickColor.new("Bright red") then
    print("The part is bright red!")
else
    print("The part is not bright red.")
end
```
The indented code only runs when everything between the "if" and the "then" is equal to true, that part is called the **condition** of the if statement
In this instance, the condition :
```lua
createdPart.BrickColor == BrickColor.new("Bright red")
``` 
is being evaluated and effectively becoming a conditional bool value (the conditions must be fulfilled for a certain value)
Assuming the createdPart always had a .BrickColor property set to red, the following code would be equivalent
```lua
if true then
    print("The part is bright red!")
else
    print("The part is not bright red.")
end
```
Having a true value there guarantees that the following code will run
If responds to true values, and else responds to false values, if the initial if statement does not receive a true value, then the following elseif and else statements will run their corresponding lines
### elseif Statement
Elseif is used after the initial if statement is placed, it is used to check multiple conditions beyond the first if statement
This statement removes the need to add end statements after every if statement if multiple of them are "backup plans" for the first if statement if the condition isn't true
```lua
local part = script.Parent
if part.BrickColor == BrickColor.new("Bright red") then
    print("The part is bright red!")
elseif part.BrickColor == BrickColor.new("Bright blue") then
    print("The part is bright blue!")
else
    print("The part is neither bright red nor bright blue.")
end
```
Assuming the part .BrickColor property is always set to Bright blue, we can infer what lines of code will run in our function :
```lua
local part = script.Parent
if false then
    print("The part is bright red!")
elseif true then
    print("The part is bright blue!")
else
    print("The part is neither bright red nor bright blue.")
end
```
This is how the function would effectively run after the boolean expressions are evaluated
We know that the condition of an if statement has to be true for the following "then" code to run, so the first if is ignored, and the second if runs its code.
### while Statement
This statement is similar to the if statement, but it actually creates a loop
a **loop** is a type of system where all of the code inside of the loop runs multiple times until the loop is "broken"
The while statement runs any code on the inside until the condition of the while Statement is false
```lua
local count = 1
while count < 30 do -- the condition is that the count variable is less than 30
    print(count) -- this is inside the loop
    count += 1 
end
-- This is a compound operator "+=" which is unique to Roblox's version of Lua
-- It effectively performs this assignment (x = x + 1)
```
### repeat Statement
This statement is paired with the **until** statement, it repeats the code inside the loop until the condition is true, the test is always done atleast once, since the condition is only checked until after the code on the inside of the loop has run.
```lua
-- This script is the same as the previous one, Can you figure out why?
local count = 1
repeat
    print(count)
    count +=1
until count == 29 -- the condition is not met with 30, like before
```
### break Statement
This statement forces a loop to stop running, code written after or "outside of" the loop will begin to run
```lua
for i = 1,100,1 do -- This is 
    print(i)
    if i == 4 then
    break
    end
end
```
### Summary
* Condition - A boolean expression that is written after certain statements for their evaluation
* if - Runs code when it's condition is true
* elseif  - A version of the If statement for compound conditions, it acts as a "backup plan" for the original if its condition is not met
* while - A statement similar to the if statement, that instead creates a loop
* Loop - A system where a certain section of code runs repetitively
* repeat - A statement that repeats code inside the loop until the condition is true
* break - forces a loop to stop running, used well with conditional if statements to stop code if a certain condition is met

### Relevant Links
[https://www.lua.org/pil/contents.html#4](https://www.lua.org/pil/contents.html#4)