
### What is a Return Statement?

A **return statement** allows a function to send a value back to where it was called. When a function is executed, the script can use the returned value in further operations.

```lua
local function add(a, b)
    return a + b -- Returns the sum of a and b
end

local result = add(5, 3) -- The result now holds the value 8
print(result) -- Outputs: 8
```

In this example:
1. The function **add** returns the sum of two numbers.
2. The returned value is assigned to the variable **result**.
3. You can then use **result** in any way you'd like.


### Why is Returning Important?

Functions that return values:

1. **Make Your Code Reusable:** The same function can perform a task and give you the result, no matter where or how many times it's called.
2. **Reduce Repetition:** Instead of writing the same logic multiple times, use a function and let it return the value you need.
3. **Enable Composition:** Combine multiple functions to solve complex problems in smaller, manageable steps.

For example, you can use a return value to pass the result of one function into another:

```lua
local function square(num)
    return num * num
end

local function addAndSquare(a, b)
    local sum = a + b
    return square(sum) -- Pass the sum into the square function
end -- This creates a sort of "compound" function

print(addAndSquare(3, 4)) -- Outputs: 49
```

### Returning Multiple Values

Lua allows you to return **multiple values** from a single function. This can be useful for returning multiple pieces of related information at once.

```lua
local function divideAndRemainder(a, b)
    local quotient = math.floor(a / b)
    local remainder = a % b
    return quotient, remainder
end

local q, r = divideAndRemainder(10, 3)
print("Quotient:", q, "Remainder:", r) -- Outputs: Quotient: 3 Remainder: 1
```

### Functional Design Principles

Here are some design tips to help you write better functions:

#### 1. Single Responsibility
Each function should perform **one specific task**. This makes your code easier to debug and maintain.

```lua
local function isPlayerAlive(player)
    return player.Health > 0
end
```

This function does one thing: check if a player is alive.

#### 2. Avoid Side Effects
Functions that change global variables or other parts of the program indirectly are harder to debug. Instead, let functions work with their inputs and outputs.

```lua
-- Avoid this:
local result = 0
local function addToResult(a, b)
    result = a + b -- Modifies a global variable
end

-- Better:
local function add(a, b)
    return a + b -- Returns a value instead of modifying a variable
end
```

#### 3. Use Parameters and Returns
Always pass required data into a function through parameters and return any results. This ensures your functions are modular and reusable.

```lua
local function calculateDamage(baseDamage, multiplier)
    return baseDamage * multiplier
end

local damage = calculateDamage(10, 1.5)
print("Damage dealt:", damage) -- Outputs: Damage dealt: 15
```

#### 4. Make Functions Predictable
A function should always return the same result for the same inputs. This is called **idempotence** and is crucial for debugging and testing.

```lua
-- Predictable:
local function double(x)
    return x * 2
end

-- Unpredictable:
local randomOffset = 5
local someTrue = true
local someFalse = false
local function doubleWithRandomness(x)
    if someTrue then
        return false,false
    elseif not someFalse then
        return true
    end
    return x * 2 + randomOffset 
end -- This function returns a variety of different possible returns
-- Based on what's going on, its harder to determine what will happen
--You can setup cases to handle different outputs, but it isn't ideal.
```

#### 5. **Error Handling**

You can use returns in order to figure out if a function
is running properly.

```lua
local function safeDivide(a, b)
    if b == 0 then
        return nil, "Cannot divide by zero"
    end
    return a / b
end

local result, err = safeDivide(10, 0)
if not result then
    print("Error:", err)
else
    print("Result:", result)
end
```

### Key Concepts

1. **Return values** allow functions to send information back to the caller, enabling modular design.
2. Functions can return **multiple values**, which is useful for tasks like splitting data.
3. Follow **functional design principles** to write clean, maintainable, and reusable code.


### Exercises

Try these challenges to test your understanding:

1. Write a function that takes a number and returns whether it’s odd or even.
2. Create a function that calculates the area and perimeter of a rectangle and returns both values.
3. Write a function that checks if a number is prime and returns **true** or **false**.

