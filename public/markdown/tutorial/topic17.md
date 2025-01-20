

### Iterators

**Iterators** allow you to traverse collections such as arrays, dictionaries, or even custom data structures. 
Iterators are the foundation for loops like **for** and enable you to work efficiently with large or complex datasets.

#### Built-in Iterators

Lua provides several built-in iterators:

1. **ipairs** for sequential arrays.
2. **pairs** for dictionaries or tables with non-sequential keys.

##### Example: Using ipairs

```lua
local fruits = {"Apple", "Banana", "Cherry"}

for index, value in ipairs(fruits) do
    print(index, value)
end
-- Outputs:
-- 1 Apple
-- 2 Banana
-- 3 Cherry
```

- **ipairs** iterates over an array in order, stopping at the first **nil** value.

##### Example: Using **pairs**

```lua
local scores = {
    Alice = 85,
    Bob = 92,
    Charlie = 78
}

for name, score in pairs(scores) do
    print(name, score)
end
-- Outputs (order may vary):
-- Alice 85
-- Bob 92
-- Charlie 78
```

- **pairs** iterates over all key-value pairs in a table, regardless of order.

### Custom Iterators

You can create your own iterators using **closures** and the **iterator** function. This is useful when working with custom data structures or generating sequences.

#### A Range Iterator

```lua
local function rangeIterator(start, stop, step)
    local current = start - step
    return function()
        current = current + step
        if current <= stop then
            return current
        end
    end
end

for num in rangeIterator(1, 10, 2) do --similar to for i = 1,10,1 do
    print(num)
end
-- Outputs:
-- 1
-- 3
-- 5
-- 7
-- 9
```

How it works:
- The **rangeIterator** function creates a closure that remembers the current value.
- Each call to the returned function increments and returns the next value until the range is exhausted.

### Generators

**Generators** are functions that produce values on demand, often using **coroutine** functionality in Lua. They allow for lazy evaluation, where values are generated only as needed.

#### Infinite Generator

```lua
local function infiniteGenerator(start)
    return coroutine.wrap(function() -- Coroutines will be covered in #21
        local current = start
        while true do
            coroutine.yield(current)
            current = current + 1
        end
    end)
end

local gen = infiniteGenerator(5)
print(gen()) -- Outputs: 5
print(gen()) -- Outputs: 6
print(gen()) -- Outputs: 7
```

How it works:
1. **coroutine.wrap** creates a coroutine from the function.
2. Inside the coroutine, **coroutine.yield** pauses execution and returns the current value.
3. Each call to the generator resumes execution and computes the next value.


### Applications

#### Iterating Over Players

You can use **pairs** to iterate through all players in a game:

```lua
local Players = game:GetService("Players")

for _, player in pairs(Players:GetPlayers()) do
    print(player.Name)
end
```

#### Pathfinding with Custom Iterators

Imagine a system that traverses a grid:

```lua
local function gridIterator(rows, cols)
    local row, col = 1, 0
    return function()
        col = col + 1
        if col > cols then
            col = 1
            row = row + 1
        end
        if row <= rows then
            return row, col
        end
    end
end

for row, col in gridIterator(3, 3) do
    print("Row:", row, "Col:", col)
end
-- Outputs:
-- Row: 1 Col: 1
-- Row: 1 Col: 2
-- Row: 1 Col: 3
-- Row: 2 Col: 1
-- Row: 2 Col: 2
-- Row: 2 Col: 3
-- Row: 3 Col: 1
-- Row: 3 Col: 2
-- Row: 3 Col: 3
```


### Key Takeaways

1. Use **ipairs** for arrays and **pairs** for dictionaries when iterating.
2. Create **custom iterators** to manage specific data traversal logic.
3. Leverage **generators** for lazy evaluation and infinite sequences.

### Exercises

1. Write a custom iterator that generates Fibonacci numbers up to a given limit.
2. Create a generator for cycling through a predefined list of values (e.g., "red", "blue", "green").
3. Implement a grid iterator that skips certain cells based on a condition (e.g., only return even rows).

