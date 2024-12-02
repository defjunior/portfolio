
Remember those "local" keywords used to assign a bunch of variables in previous topics?
They are actually part of a system used to declare variables in context
Scope refers to the context in which a function is accessible
There are two types of scope, notably :
* Global Scope, which refers to variables and functions accessible from anywhere in the script
* Local Scope, which refers to variables only in the block or function where they are defined
### Global Variables
Global variables are declared without the local keyword, and can be used from anywhere in the script
```lua
-- Global variable
score = 0

function increaseScore()
    score = score + 1
end

print(score)  -- Output: 0
increaseScore()
print(score)  -- Output: 1
```
### Local Variables
Local variables are declared with the local keyword and can only be accessed within the block where they are defined. If another block is made inside of the block where it is defined, it will be accessible in that "lower" block
```lua
function printMessage()
    do -- this is a way to make a new block without an if statement
        local message = "Hello, local scope!"
        print(message)
    end
    -- print(message)  -- This will cause an error because 'message' is not accessible here
end

printMessage()  -- Output: Hello, local scope!

```
You can see that the message variable only works when it is made inside of that first block
Additionally, the "scope" of the variable extends to blocks made within that initial block
```lua
function printMessage()
    do -- this is a way to make a new block without an if statement
        local message = "Hello, local scope!"
        print(message)
        do
            -- this is another block inside of a bigger block
             print(message) -- this works because it is defined in a "higher" block
        end
    end
    -- print(message)  -- This will cause an error because 'message' is not accessible here
end

printMessage()  -- Output: Hello, local scope!

```
It helps to think of it like how we talked about directories in Topic #1
Relative to how I explained it there, you could imagine the higher block as a parent, and all of the lower blocks as children
This image also helps with thinking about scope:
![Alt Text](https://prod.docsiteassets.roblox.com/assets/scripting/scripts/Scope-Diagram.png.webp)
* Block B can access the local variable in block A.
* Block C can access the local variables and functions in blocks A and B.
* Block A cannot access the local variables and functions in blocks B or C.
* Block B cannot access the local variable in block C.

Definitely check out the documentation on Scope here :
[https://create.roblox.com/docs/luau/scope](https://create.roblox.com/docs/luau/scope)
### Variables inside Functions
Variables that are made inside of functions cannot be used outside of them, unless you use a return statement and declare a variable's value to be the function call
```lua 
function calculateSum(a, b)
    local sum = a + b
    return sum
end

local result = calculateSum(5, 3)
print(result)  -- Output: 8
-- print(sum)  -- This will cause an error because 'sum' is local to the function
```
### Nested Functions
Variables from upper or "outer" blocks can be used in lower or "inner" blocks
```lua
function outerFunction()
    local outerVariable = "I'm outside!"
    
    function innerFunction()
        local innerVariable = "I'm inside!"
        print(outerVariable)  -- Accesses outer function's variable
        print(innerVariable)  -- Accesses its own variable
    end

    innerFunction()
    -- print(innerVariable)  -- This will cause an error because 'innerVariable' is not accessible here
end

outerFunction()
```
Whenever you're writing scripts, you should keep these tips in mind to minimize scope problems
* You should generally be using local variables unless you're certain you will need the variable outside of the scope you're in, otherwise, global variables with the same names will be treated as the same variable, and you will create a bunch of different errors
* Indent properly so you can actually keep track of what scope you are in

### Summary
*   Global Scope - Accessible from anywhere in the script.
*   Local Scope - Accessible only within the block or function where defined.
*   Nested Functions - Inner functions can access variables from their parent functions.
### Relevant Links
[https://www.lua.org/pil/4.2.html](https://www.lua.org/pil/4.2.html)
[https://create.roblox.com/docs/luau/scope](https://create.roblox.com/docs/luau/scope)
