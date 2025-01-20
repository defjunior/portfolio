
### Events
Events are the way in scripting you can do something in reaction to something else
For example, whenever the property of a part changes, or the value of a value object changes, you
would be able to run code to happen "on event"
The functions written to deal with when events are fired, are called **event handlers**

For this example, we're going to be using the part.Touched event, which fires whenever the part is touched by another part.
To handle an event, you need to connect it to a function using the "**Connect**" method

```lua
local part = script.Parent

-- Function to handle the event
local function onTouched(otherPart)
    print("Part touched by: " .. otherPart.Name)
end

-- Connecting the event to the function
part.Touched:Connect(onTouched) -- The "listener" which marks the function actually beginning to take arguments from the event
-- This will run the function whenever the part event is fired.
```
The function assigned to handle the event has to listen for the correct arguments
Each event has its unique set of arguments or even an unlimited set of arguments
the part.Touched event passes a single argument to its listener, the first one, which is the new part being identified because it has touched our original part.

There's a type of event which is found in literally every game
These are the events related to players joining and leaving the game

```lua
local Players = game:GetService("Players") -- The Players service has the event

-- Function to handle the event
local function onPlayerAdded(player)
    print(player.Name .. " has joined the game")
end

-- Connecting the event to the function
Players.PlayerAdded:Connect(onPlayerAdded) -- This listener can also be defined as the value of a variable, as it is a RBXScriptConnection
-- You can call :Disconnect() on RBXScriptConnections whenever you want to stop listening for an event


-- Additionally, you can handle events by defining the related function inside of the connect method
-- This is often done when dealing with functions that are not reused
Players.PlayerAdded:Connect(function(player)
  print(player.Name .. " has joined the game")
end)
```

### Relevant Links
[https://create.roblox.com/docs/scripting/events](https://create.roblox.com/docs/scripting/events)