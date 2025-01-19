
Like we covered earlier in Topic #1, a **function** is essentially a set of ordered instructions
or a "block" of code that you can designate to run at a certain time using a **function call**
The first step is to define the function, you're essentially putting a nametag on the block of
code you want to run later.
```lua
function greet()
    print("Hello, world!")
end
```
The function keyword is used, and the name of the function is put after, with a parentheses immediately next to it.
```lua
function greet ()
```
Is improper, please do not type this
The second step is to call the function, which executes all of the code you have written before it's end statement
In this case, 
```lua
print("Hello, world!")
```
would run when the **greet** function is called
In order to a call a function, you need to call it by its name followed by parentheses
```lua
greet()
```
This calls a function without specifying any arguments
### Function Arguments
Like we covered in earlier topics, Functions can take **arguments**, which are values that are
given to the function and **effectively made as variables within the scope of the function**
We'll go over function scope later, so here's an example of a function argument
```lua
function greetPerson(name)
    print("Hello, " .. name .. "!")
end
--- .. is a concatenation operator, which combines two values into one string
greetPerson("Alice")  -- Output: Hello, Alice!
greetPerson("Bob")    -- Output: Hello, Bob!
```
You can see that "**name**" is written between the parentheses where the function is initially defined
Whenever a function is defined, it will only take the amount of arguments defined, with the exception of **variadic functions** that take a variable number of arguments
This particular function is like a guy in a booth sitting there, waiting to greet people
But he doesn't know what their names are, so when he gets a slip of paper (the argument) he is able to perform his task
### return Statements
Functions can return values when they are read as if they were variables
You can assign the value of a variable to a function call, and when the function call is evaluated the variable value will be whatever the function returns
```lua
function add(a, b) -- Multiple arguments are spaced by commas
    return a + b 
end

local sum = add(5, 3)
print(sum)  -- Output: 8
```
Return statements always end the function, and act like how break statements work for loops
You can't and shouldn't write anything after a return statement, unless it's part of multiple conditionals :
```lua
function example(number)
    if number > 5 then
        return 2
    elseif number == 4 then
        return 3
    elseif number == 2 then
        return 1
    end
    return 0
end
```
Within the if statements a "block" is made, and it can be exited with return
If the "block" in question is the function's main block, the function will end, like the "return 0" line at the end.
### Summary
* return - Acts as a break statement for a function block, gives out values and acts as the output of a function, when the function call is treated like a variable
* block - A section of code between two key statements, usually "then" and end", easily marked by how the code is indented.
* argument - An input to a function, can be seperated by commas, inside of parentheses of the function definition
* function call - A command to run the code inside of a function, with certain arguments
