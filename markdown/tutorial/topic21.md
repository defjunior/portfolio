
### Coroutines

Coroutines are a powerful feature that allows you to pause and resume functions. 
Unlike regular functions, coroutines can yield execution back to the calling code and later resume from where they left off. 
This is especially useful for tasks that need to run over time without blocking the rest of your program, such as animations, timers, or background tasks.
It's essentially a way to create another side task for your code to execute without interfering with the ongoing order of instructions.

### Creating and Using Coroutines

To work with coroutines, you use the following functions:

- **coroutine.create**: Creates a new coroutine.
- **coroutine.resume**: Resumes or starts a coroutine.
- **coroutine.yield**: Pauses a coroutine and allows it to be resumed later.
- **coroutine.status**: Returns the status of a coroutine.
- **coroutine.wrap**: Creates and returns a function that resumes the coroutine automatically.

#### Using Coroutines

```lua
local function exampleCoroutine()
    print("Coroutine started")
    coroutine.yield() -- Pause here
    print("Coroutine resumed")
end

local co = coroutine.create(exampleCoroutine)

print(coroutine.status(co)) -- Outputs: suspended
coroutine.resume(co) -- Outputs: Coroutine started
print(coroutine.status(co)) -- Outputs: suspended
coroutine.resume(co) -- Outputs: Coroutine resumed
print(coroutine.status(co)) -- Outputs: dead
```

### Yielding Execution

The **coroutine.yield** function pauses a coroutine, allowing other parts of the program to execute. 
When you resume the coroutine, it picks up from where it left off.

#### Countdown Timer

```lua
local function countdown(start)
    for i = start, 1, -1 do
        print("Countdown:", i)
        coroutine.yield() -- Pause between iterations
    end
    print("Go!")
end

local co = coroutine.create(countdown)

coroutine.resume(co, 5) -- Outputs: Countdown: 5
coroutine.resume(co)    -- Outputs: Countdown: 4
coroutine.resume(co)    -- Outputs: Countdown: 3
```

### coroutine.wrap

The **coroutine.wrap** function simplifies working with coroutines by returning a function that resumes the coroutine automatically.
It's extremely useful for when you want to immediately run something on another thread or in the background.

#### Using coroutine.wrap

```lua
local function greeter()
    for _, name in ipairs({"Mek", "Luke", "Guest"}) do
        print("Hello, " .. name)
        coroutine.yield()
    end
end

local greet = coroutine.wrap(greeter)

greet() -- Outputs: Hello, Mek
greet() -- Outputs: Hello, Luke
greet() -- Outputs: Hello, Guest
```

### Practical Applications 

Coroutines are especially useful for managing tasks like animations, sequences, or game loops without blocking other processes.

#### Task Scheduler

Coroutines can act as lightweight threads for scheduling tasks:

```lua
local function taskScheduler()
    while true do
        print("Running task...")
        coroutine.yield()
    end
end

local scheduler = coroutine.create(taskScheduler)

for i = 1, 3 do
    coroutine.resume(scheduler)
    wait(1)
end
```

### Coroutine States

Coroutines can be in one of the following states:

1. **suspended**: Ready to start or resume.
2. **running**: Currently executing.
3. **normal**: Yielded to the main thread.
4. **dead**: Finished execution.

#### Checking Coroutine Status

```lua
local co = coroutine.create(function() end)
print(coroutine.status(co)) -- Outputs: suspended
coroutine.resume(co)
print(coroutine.status(co)) -- Outputs: dead
```

### Best Practices

1. **Use for Non-Blocking Tasks**: Coroutines are ideal for tasks that require pausing without halting the entire script.
2. **Avoid Excessive Coroutines**: Too many active coroutines can complicate debugging and degrade performance.
3. **Debug with States**: Use **coroutine.status** to monitor coroutine behavior during development.

### Exercises

1. Write a coroutine that alternates between printing "Ping" and "Pong" with a delay.
2. Create a coroutine-based task manager that runs multiple tasks sequentially.
3. Implement a coroutine that manages a game countdown and triggers an event when it ends.

### Relevant Links

[https://create.roblox.com/docs/reference/engine/libraries/coroutine](https://create.roblox.com/docs/reference/engine/libraries/coroutine)
