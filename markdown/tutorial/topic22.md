
### Introduction to the task Library

the **task** library provides a modern and efficient way to handle delays and scheduling tasks in your game. 
It is an improvement over older methods like **wait()** and **spawn()**, offering better precision and performance. 
The **task** library is ideal for running asynchronous code and managing tasks that need to occur over time.

### Core Functions in the task Library

The **task** library provides the following core functions:

1. **task.wait(seconds?)**: Pauses the current thread for the specified number of seconds (default is 0).
2. **task.delay(seconds, callback)**: Schedules a function to execute after a delay.
3. **task.spawn(callback, ...args)**: Runs a function asynchronously in a new thread.
4. **task.defer(callback, ...args)**: Defers the execution of a function until the next frame.

### Using task.wait

The **task.wait** function pauses the execution of the current thread for a specified duration.

```lua
print("Start")
task.wait(2) -- Waits for 2 seconds
print("End") -- Outputs after 2 seconds
```

- If no argument is provided, **task.wait()** waits for the default frame duration.

### Using task.delay

**task.delay** schedules a callback to execute after a specified delay without halting the current thread.

```lua
task.delay(3, function()
    print("This message is delayed by 3 seconds.")
end)

print("This message appears immediately.")
```

### Using task.spawn

**task.spawn** starts a new thread and runs the given function asynchronously. It’s useful for running tasks concurrently without blocking the main thread.

#### Example:

```lua
local function printNumbers()
    for i = 1, 5 do
        print(i)
        task.wait(1) -- Pauses for 1 second between prints
    end
end

task.spawn(printNumbers)
print("This message appears before the numbers are printed.")
```

### Using task.defer

The **task.defer** function schedules a function to execute at the end of the current frame. This is helpful for tasks that need to wait until the current operations are complete but don’t require a delay.

#### Example:

```lua
print("Before defer")
task.defer(function()
    print("Deferred execution")
end)
print("After defer")
-- Outputs:
-- Before defer
-- After defer
-- Deferred execution
```

### Practical Applications 

#### Animations and Delays

The **task** library simplifies timed sequences for animations or effects.

```lua
local function playAnimation()
    print("Animation starts")
    task.wait(2)
    print("Animation ends")
end

playAnimation()
```

#### Periodic Tasks

You can use **task.wait** inside a loop for periodic actions.
task.wait is the updated version of the default wait() function.
It's mainly used because it runs on essentially twice the precision.
```lua
local function periodicTask()
    while true do
        print("This runs every 5 seconds.")
        task.wait(5)
    end
end

task.spawn(periodicTask)
```

#### Running Multiple Tasks Concurrently

**task.spawn** is perfect for running multiple tasks simultaneously.

```lua
task.spawn(function()
    print("Task 1 starts")
    task.wait(2)
    print("Task 1 ends")
end)

task.spawn(function()
    print("Task 2 starts")
    task.wait(1)
    print("Task 2 ends")
end)

print("Main thread continues")
```

#### Non-blocking UI Updates

Use **task.defer** to update UI without blocking other scripts.

```lua
local function updateUI()
    print("Updating UI...")
end

task.defer(updateUI)
print("Other operations continue immediately.")
```

### Comparison to wait and spawn


* **wait()** Pauses the thread for a frame or seconds. 
Use **task.wait** instead. 
* **spawn()** Runs a function asynchronously.
Use **task.spawn** for better control.
* **task.wait** Modern replacement for **wait**. 
Use for precise delays in the current thread, like for a fighting game
* **task.spawn** Modern replacement for **spawn**. 
Use for Asynchronous tasks,              
* **task.delay** Executes a function after a delay.  
Scheduled actions. 
* **task.defer** Runs at the end of the current frame.            


### Exercises

1. Create a function using **task.spawn** that runs two concurrent tasks: one printing numbers from 1-5 with a delay, and another printing letters A-E with a delay.
2. Write a script that schedules a message to display every 10 seconds using **task.wait**.
3. Implement a deferred task that calculates and logs the sum of two numbers after all other code in the frame has run.

### Relevant Links

[https://create.roblox.com/docs/reference/engine/libraries/task](https://create.roblox.com/docs/reference/engine/libraries/task)
