
### Using _G for Global Frameworks

**_G** is a special table that is globally accessible to all scripts on that networking side (Server/Client). 
You can use **_G** to create global frameworks for managing data and functionality across different scripts. 
While global variables should generally be used sparingly, frameworks built with **_G** can simplify organization and communication in projects with multiple scripts.

I personally just use a module and **require()** it when needed,
but _G is useful to store certain things that are used in multiple important scripts.

#### A Simple Global Framework

```lua
_G.Framework = {
    Data = {},
    Utilities = {}
}

function _G.Framework.Data.setPlayerData(playerName, data)
    _G.Framework.Data[playerName] = data
end

function _G.Framework.Data.getPlayerData(playerName)
    return _G.Framework.Data[playerName]
end

function _G.Framework.Utilities.printPlayerData(playerName)
    local data = _G.Framework.Data.getPlayerData(playerName)
    if data then
        print(playerName .. "'s Data:", data)
    else
        print("No data found for player:", playerName)
    end
end

-- Usage example:
_G.Framework.Data.setPlayerData("Alice", { health = 100, level = 5 })
_G.Framework.Utilities.printPlayerData("Alice")
-- Outputs: Alice's Data: table: 0x...
```

### Combining _G with Object-Oriented Programming

Using OOP principles, you can structure your global framework into reusable classes and objects. 
This approach avoids cluttering _G and keeps everything modular.

#### OOP with _G

```lua
-- Define a global class in _G
_G.PlayerManager = {}
PlayerManager = _G.PlayerManager -- Alias for convenience
PlayerManager.__index = PlayerManager

function PlayerManager.new()
    local self = {
        players = {}
    }
    setmetatable(self, PlayerManager)
    return self
end

function PlayerManager:addPlayer(name)
    self.players[name] = { health = 100, level = 1 }
end

function PlayerManager:getPlayer(name)
    return self.players[name]
end

function PlayerManager:removePlayer(name)
    self.players[name] = nil
end

-- Create an instance of PlayerManager
_G.Framework = _G.Framework or {} -- Checks the first, if false, returns the second
local Framework = _G.Framework 
Framework.PlayerManager = PlayerManager.new()

-- Usage example:
Framework.PlayerManager:addPlayer("Bob")
local playerData = Framework.PlayerManager:getPlayer("Bob")
print("Bob's health:", playerData.health) -- Outputs: Bob's health: 100
```

Some of my games actually use something similar to this, but all of the
relevant functions are actually inside of a **Player** class,
And _G.Players is accessed to get the **Player** instances.


### Practical Applications 

#### Managing Global Game States

You can use **_G** to manage game-wide states or utilities shared across scripts:

```lua
_G.GameState = {
    isGameActive = false,
    roundTime = 300,
    startGame = function()
        _G.GameState.isGameActive = true
        print("Game started!")
    end,
    endGame = function()
        _G.GameState.isGameActive = false
        print("Game ended!")
    end
}

-- Usage example from another script
_G.GameState.startGame()
print("Is game active?", _G.GameState.isGameActive) -- Outputs: Is game active? true
```

#### Shared Utility Functions

You can store reusable utility functions in **_G** to simplify scripting across modules.
You could also put them in a regular module and **require()** when needed.

```lua
_G.Utilities = {
    clamp = function(value, min, max)
        return math.max(min, math.min(value, max))
    end
}

-- Usage example:
local clampedValue = _G.Utilities.clamp(150, 0, 100)
print(clampedValue) -- Outputs: 100
```


### Best Practices for _G

1. **Namespace Your Framework:** Use a single **_G** assignment (**_G.Framework**) and organize modules or classes inside it to avoid conflicts.

2. **Avoid Excessive Global Variables:** Overusing **_G** can lead to difficult-to-debug code. Restrict global access to high-level managers or shared utilities.

3. **Use Metatables for Encapsulation:** Use OOP principles to avoid polluting **_G** with too many unrelated functions.

4. **Debugging Support:** Add debug functions to your framework to list registered components or log current state.

### Advantages and Disadvantages of _G

#### Advantages

1. **Ease of Access:** Global frameworks are accessible from any script, reducing the need for dependencies.
2. **Centralized Logic:** Keeps core systems like game state or utility libraries in one place.
3. **Shared State:** Enables scripts to share state without explicit module dependencies.

#### Disadvantages

1. **Namespace Collisions:** Multiple scripts modifying **_G** without coordination can cause unexpected behavior.
2. **Tight Coupling:** Over-reliance on global state can make systems harder to test and debug.
3. **Performance Costs:** Excessive global access may slightly degrade performance in large-scale systems.

### Key Concepts

1. Use **_G** sparingly to create centralized, high-level frameworks.
2. Combine **_G** with OOP principles for better modularity and organization.
3. Avoid cluttering **_G** with unrelated variables or functions; keep it structured and maintainable.

### Exercises

1. Create a global inventory manager using **_G** that supports adding, removing, and listing items for players.
2. Implement a global settings framework in **_G** with default game configurations that can be overridden per game session.
3. Write a global logger in **_G** that tracks and formats messages from different parts of the game.


