
### Events
Anything that might randomly happen within a game environment might also have an **Event** attached to it. 
**Events** are a concept that allows you to easy "react" or do something whenever a certain
object changes property, 
a player fires a remote event (networking to the server) 
or other changes that occur in your game. 
It offers a way to create a dynamic systems in your games.

Events are sort of like objects in scripts that have to "ends" to them
you can think of it as a long trail set out for a messenger
The data passed through the event goes from one end to another

Here are some common event names you might come across :

1.  **Player Events:**
    
    -   **PlayerAdded**: Triggered when a new player joins the game.
    -   **PlayerRemoving**: Triggered when a player leaves the game.
2.  **Input Events:**
    -   **MouseButton1Click**: Triggered when the left mouse button is     clicked.
    -   **KeyDown**: Triggered when a key is pressed.
3.  **Object Events:**
    -   **Touched**: Triggered when an object comes into contact with another.
    -   **Changed**: Triggered when a property of an object changes.
    (We'll go over an alternative method of Changed later)

To respond to an event, you can usually use :Connect(function)
The function you assign to the the Connect method will take in all of the arguments of the event if it has any

The simplest events come from services

```lua
local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
    print(player.Name .. " has joined the game.")
end)

Players.PlayerRemoving:Connect(function(player)
    print(player.Name .. " has left the game.")
end)
```
:Connect() can also take in a function you are actively defining
like above

Other times, you can use :Connect() with a predefined function

```lua
local Players = game:GetService("Players")
local function OnPlayerAdded(player)
    print(player.Name .. " has joined the game.")
end)
local function OnPlayerRemoving(player)
    print(player.Name .. " has left the game.")
end)
Players.PlayerAdded:Connect(OnPlayerAdded)

Players.PlayerRemoving:Connect(OnPlayerRemoving)
```

These two codeblocks are equivalent.

A common way of using events is to make your own custom events
This is useful when you want to pass data from one script to another in order to use a better environment to handle the data.

This is a form of serverside networking

```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
 local CustomEvent = Instance.new("BindableEvent",ReplicatedStorage) 
 CustomEvent.Event:Connect(function(message)
 print("Custom Event Triggered: " .. message) 
 end) -- Make the event connection
CustomEvent:Fire("Hello, this is a custom event!")
```
In order to make a custom event, you need to create a bindable event instance
Once you have the event instance, you can use the :Fire() method of the bindable event to pass data to any script which has a .Event connection for that specific bindable event.


### Relevant Links
[https://create.roblox.com/docs/reference/engine/classes/BindableEvent](https://create.roblox.com/docs/reference/engine/classes/BindableEvent)
[https://create.roblox.com/docs/scripting/events/bindable](https://create.roblox.com/docs/scripting/events/bindable)