
### Closures

A **closure** is a function that captures variables from its surrounding scope. This means that even after the outer function has finished executing, the inner function retains access to the variables it used.
```lua
local function counter()
    local count = 0 -- Variable defined in the outer scope

    local function increment()
        count = count + 1 -- Inner function remembers 'count'
        return count
    end

    return increment
end

local myCounter = counter() -- Returns the 'increment' function
print(myCounter()) -- Outputs: 1
print(myCounter()) -- Outputs: 2
print(myCounter()) -- Outputs: 3
```

1. The **counter** function creates a local variable **count** and a nested function **increment**.
2. When **counter** returns the **increment** function, **count** is still accessible because **increment** "remembers" the scope in which it was created.
3. Each call to **myCounter()** modifies and returns the updated value of **count**.

Closures are useful for creating **State functions**, like counters, cooldown timers, or other systems that need to retain a state.

### Higher-Order Functions

A **Higher-order function** is a function that:
1. Accepts other functions as arguments.
2. Returns a function as its result.

Higher-order functions are a cornerstone of functional programming and can make your code more flexible and modular.

#### Functions as Arguments

```lua
local function applyToEach(array, func)
    for i, value in ipairs(array) do
        array[i] = func(value)
    end
    return array
end

local numbers = {1, 2, 3, 4}
local doubled = applyToEach(numbers, function(x) return x * 2 end)
print(table.concat(doubled, ", ")) -- Outputs: 2, 4, 6, 8
```

Here:
- The **applyToEach** function takes an array and a function (**func**) as arguments.
- It applies the function to each element of the array.
- You can pass different functions to modify the array in various ways.

#### Returning Functions

```lua
local function multiplier(factor)
    return function(x)
        return x * factor
    end
end

local double = multiplier(2)
local triple = multiplier(3)

print(double(5)) -- Outputs: 10
print(triple(5)) -- Outputs: 15
```

Here:
- The **multiplier** function returns a new function that multiplies its input by the given **factor**.
- This is an example of a function that generates other functions dynamically.

### Timed Cooldowns Using Closures

Closures can be used to manage cooldowns for player actions.

```lua
local function createCooldown(seconds)
    local lastUsed = 0

    return function()
        local currentTime = os.time()
        if currentTime - lastUsed >= seconds then
            lastUsed = currentTime
            return true -- Cooldown is complete
        else
            return false -- Still on cooldown
        end
    end
end

local abilityCooldown = createCooldown(5) -- 5-second cooldown

if abilityCooldown() then
    print("Ability used!")
else
    print("Ability is on cooldown!")
end
```

This is a pretty uncommon method though, and I would instead recommend using a large table with some helper functions.

### Filtering Arrays with Higher-Order Functions

You can use higher-order functions to filter arrays dynamically.

```lua
local function filter(array, predicate)
    local result = {}
    for _, value in ipairs(array) do
        if predicate(value) then -- Checks if the function returns true
            table.insert(result, value)
        end
    end
    return result
end

local players = {
    {Name = "Alice", Score = 150},
    {Name = "Bob", Score = 200},
    {Name = "Charlie", Score = 100}
}

local highScorers = filter(players, function(player)
    return player.Score > 120
end) -- Pass along the function that returns true/false

for _, player in ipairs(highScorers) do
    print(player.Name .. " scored above 120!")
end
-- Outputs:
-- Alice scored above 120!
-- Bob scored above 120!
```


### Functional Patterns

#### 1. Encapsulation with Closures
Encapsulate state and logic inside a function to keep your code clean and modular.

```lua
local function createPlayer(name, health)
    return {
        getName = function() return name end,
        getHealth = function() return health end,
        takeDamage = function(damage)
            health = math.max(health - damage, 0)
        end
    }
end

local player = createPlayer("John", 100)
print(player.getName()) -- Outputs: John
player.takeDamage(20)
print(player.getHealth()) -- Outputs: 80
```

#### 2. Composition with Higher-Order Functions

Combine smaller functions to build more complex behavior.

```lua
local function compose(f, g)
    return function(x)
        return f(g(x))
    end
end

local function addOne(x) return x + 1 end
local function square(x) return x * x end

local addOneThenSquare = compose(square, addOne)
print(addOneThenSquare(3)) -- Outputs: 16 (4^2)
```

### Key Concepts

1. **Closures** let functions "remember" the context in which they were created.
2. **Higher-order functions** allow you to pass and return functions, enabling dynamic and flexible code.
3. Use closures and higher-order functions to create reusable patterns for state management, array operations, and more.


### Exercises

1. Write a function that creates a countdown timer using closures. Each call should decrement the timer and return the remaining time.
2. Create a higher-order function **map** that applies a given function to every element in an array and returns the modified array.
3. Write a function that generates a series of arithmetic functions (e.g., add, subtract, multiply) dynamically.




