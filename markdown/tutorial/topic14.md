
### Why learn this?

Online multiplayer games have a networking structure that is pretty
simple to understand.

There is the **server**, that basically holds all of the necessary game data and sends it over the internet to the **clients** 
which are the versions of the current game being shown on the players' screens.

As a developer, it will be necessary for you to at some point send
information to a client for a player to do something that wouldn't 
normally be done on the server, like having a client simulate an effect 
on their screen to save resources on the server.

### Sides of the network

**Server-side** essentially refers to anything that is kept on the server.
The game is being simulated on the server and the server updates
what the client's game simulates.

**Client-side** refers to anything that is kept on the client,
usually things like HUDs and UI are client-sided, because they are things
that only you should be able to see. 

(Like your name on your player profile in a menu)

## Ways to Communicate

**Events** are a way to communicate in Roblox, you generally want to have these events accessible to the sides they communicate with. 
So an event that only mediates server to server communication would stay
server-sided in places like **ServerStorage** or **ServerScriptService**
And an event that mediates server to client or vice versa communication would be in a place accessible to both sides, like **ReplicatedStorage**

You can read more about the Roblox services in their API reference.

### Remote Events

**Remote Events** allow one-way communication between the server and client, think of writing a message on a paper airplane, and throwing it to the other side of a brick wall.

Since it is something that communicates both ways, it must be in a place that is **accessible to both the server and client**. 
This is mainly because in order to create the endpoint or to connect a
function to the event, you need to get the event's instance first.

### Example of Client to Server Communication

This is a client script that sends information to the server
You can use the **FireServer** method on an event to send that information.
```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local playerActionEvent = ReplicatedStorage:WaitForChild("PlayerActionEvent")

local function onAction()
    playerActionEvent:FireServer("Jump", 10) -- Sends the action name and intensity to the server
end

script.Parent.MouseButton1Click:Connect(onAction)
```

This is a server script that receives information from the client.
You can use the **OnServerEvent** event to connect a function that runs when the server receives the signal.

Notice how the arguments on the server match the client's data, 
but always begin with the player


```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local playerActionEvent = ReplicatedStorage:WaitForChild("PlayerActionEvent")

playerActionEvent.OnServerEvent:Connect(function(player, action, intensity)
    print(player.Name .. " performed action: " .. action .. " with intensity: " .. intensity)
    -- Process the action on the server (e.g., apply force, update stats)
end)
```

When receiving remote events on the server, they come directly from a player, 
so the player that sent the signal is always 
the first argument for **OnServerEvent**.

This is a pattern that occurs with other event instances aswell.

### Server to Client Communication

While **Remote Events** are one way communication, they can be initiated from either the **Server >> Client** or **Client >> Server**.

Here is an example, starting with the server script and then the client script.

```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local playerActionEvent = ReplicatedStorage:WaitForChild("PlayerActionEvent")

local function notifyPlayer(player, message)
    playerActionEvent:FireClient(player, message) -- Sends a message to a specific player
end

notifyPlayer(game.Players:GetPlayers()[1], "Welcome to the game!")
```
Notice how the server has to specify which player receives the message.
For the **FireClient** method, the player is always the first argument.

And now the client script :

```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local playerActionEvent = ReplicatedStorage:WaitForChild("PlayerActionEvent")

playerActionEvent.OnClientEvent:Connect(function(message)
    print("Notification: " .. message)
    -- Display the message to the player
end)
```

**Remote Events** are probably the easiest type of communication to use, and usually the most common type.
 Most things are fire and forget approaches that don't require any sort of back to back communication
People create "chains" of remote events for back and forth communication when the topic of communication changes.

For example, a client sending inputs to a server, then a server sending cooldown information to a client
It is very easy to see how networking directly leads into creating systems, which build games.

### Server Events

Server events are just known as the "Event" instance in Roblox
They function identically to **Remote Events** but 
only have the **Fire** method instead of the **FireClient** and **FireServer** methods.
They can only be used for cross-script communication on the server.
Additionally, there is no need to specify the player since there is none.

### Remote Functions

**Remote Functions** allow for two-way communication, where the client requests information or the server does, and there is actual back and forth.

The general form of Remote Function communication is either 
**Server > Client > Server** or **Client > Server > Client**

They are used whenever you want to get the status or additional information after firing what would have been a regular remote event

Here's the client script:
```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local requestStats = ReplicatedStorage:WaitForChild("RequestStats")

local stats = requestStats:InvokeServer() -- Request data from the server
-- The data received back from the server is initialized as a variable 
-- InvokeServer is a yielding function, stops the code until a response is given

print("Received stats: ", stats.Health, stats.Mana) 
```

Here's the server script :
Notice how **OnServerInvoke** does not use **:Connect()**

```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local requestStats = ReplicatedStorage:WaitForChild("RequestStats")

requestStats.OnServerInvoke = function(player)
    -- We only receive which player is asking for the data
    -- This is step 2 in the communication (Client > Server > Client)
    -- Return stats for the requesting player
    return {
        Health = 100,
        Mana = 50
    } -- Return data back to the client.
end
``` 

The same form of communication applies, with the additional methods 
**InvokeClient** and the **OnClientInvoke** event.

Keep in mind, that if the function errors on the client, it will error on the server, and vice versa.

### Key Concepts

* Server-Side Scripts: Scripts that run on the Roblox server and handle shared game logic, such as updating game states or processing player actions.

* Client-Side Scripts: LocalScripts that run on a player's device and handle UI, animations, and local interactions.

* RemoteEvents: One-way communication, (Client > Server)

* RemoteFunctions: Two-way communication (Client > Server > Client), etc.

### Important Notes

* Security: Always validate data sent from the client to the server to prevent cheating or exploitation.

* Performance: Use RemoteEvents and RemoteFunctions sparingly to avoid overloading network traffic.

### Relevant Links

[https://create.roblox.com/docs/reference/engine/classes/RemoteEvent](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent)

[https://create.roblox.com/docs/reference/engine/classes/RemoteFunction](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction)

[https://developer.roblox.com/en-us/articles/Remote-Functions-and-Events](https://developer.roblox.com/en-us/articles/Remote-Functions-and-Events)