
### Metatables

**Metatables** provide a way to modify the behavior of tables. 
By attaching a metatable to a table, you can define how it behaves in various situations, 
such as arithmetic operations, 
indexing, or comparisons.

Metatables are particularly useful for creating objects, defining custom behaviors, and enhancing the functionality of your code.

#### Setting a Metatable

You can use **setmetatable** to assign a metatable to a table and **getmetatable** to retrieve it.

```lua
local myTable = {}
local meta = {}
setmetatable(myTable, meta)
print(getmetatable(myTable) == meta) -- true
```

### Metamethods

Metamethods are special keys in a metatable that define custom behavior for a table. 
These are triggered when specific operations are performed on the table.

#### __index

The **__index** metamethod allows you to define what happens when a key is accessed but does not exist in the table.

```lua
local defaults = { health = 100, stamina = 50 }
local player = {}

setmetatable(player, {
    __index = defaults
})

print(player.health) -- Outputs: 100 (from defaults)
print(player.mana) -- Outputs: nil (not defined in defaults)
```

In this example, any missing key in **player** is looked up in the **defaults** table.

#### __newindex

The **__newindex** metamethod is triggered when a new key-value pair is added to the table.

```lua
local player = {}

setmetatable(player, {
    __newindex = function(table, key, value)
        print("Setting", key, "to", value)
        rawset(table, key, value)
    end
})

player.name = "John" -- Outputs: Setting name to John
print(player.name) -- Outputs: John
```

**rawset** is used to bypass the **__newindex** metamethod and directly modify the table.

#### Arithmetic Metamethods

You can define how tables behave with arithmetic operators by implementing metamethods like **__add** or **__mul**.

```lua
local vector = { x = 0, y = 0 }

local vectorMeta = {
    __add = function(v1, v2)
        return { x = v1.x + v2.x, y = v1.y + v2.y }
    end
}

setmetatable(vector, vectorMeta)

local v1 = { x = 1, y = 2 }
local v2 = { x = 3, y = 4 }
setmetatable(v1, vectorMeta)
setmetatable(v2, vectorMeta)

local result = v1 + v2
print(result.x, result.y) -- Outputs: 4 6
```

#### __call

The **__call** metamethod lets you make a table callable like a function.

```lua
local greeter = {}

setmetatable(greeter, {
    __call = function(_, name)
        return "Hello, " .. name
    end
})

print(greeter("Alice")) -- Outputs: Hello, Alice
```

### Applications

#### Default Configurations

Use the **__index** metamethod to provide default values for configurations:

```lua
local defaultConfig = { gravity = 196.2, maxPlayers = 10 }
local gameConfig = {}

setmetatable(gameConfig, {
    __index = defaultConfig
})

print(gameConfig.gravity) -- Outputs: 196.2
```

#### Object-Oriented Programming

Metatables are commonly used to simulate object-oriented programming in Lua:

```lua
local Player = {}
Player.__index = Player

function Player.new(name, health)
    local instance = {
        name = name,
        health = health
    }
    setmetatable(instance, Player)
    return instance
end

function Player:takeDamage(amount)
    self.health = math.max(self.health - amount, 0)
    print(self.name .. " has " .. self.health .. " health left.")
end

local player1 = Player.new("Alice", 100)
player1:takeDamage(30) -- Outputs: Alice has 70 health left.
```

### Key Concepts

1. Use **metatables** to customize table behavior for indexing, arithmetic, and more.
2. Leverage **metamethods** like **__index**, **__newindex**, and **__call** to enhance your tables’ functionality.
3. Apply these concepts in practical scenarios like object-oriented programming and default configurations.


### Exercises

1. Create a table that behaves like a stack (supports **push**, **pop**, and **peek**) using metatables.
2. Implement a custom _**_sub** metamethod to allow vector subtraction.
3. Write a metatable that tracks every key added or accessed in a table and logs it to the console.

### Relevant Links

[https://create.roblox.com/docs/luau/metatables](https://create.roblox.com/docs/luau/metatables)
[https://www.lua.org/pil/13.html](https://www.lua.org/pil/13.html)