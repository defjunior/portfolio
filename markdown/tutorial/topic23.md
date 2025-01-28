
### Understanding Attributes

Attributes in Roblox allow you to store custom data directly in instances. 
They are useful for attaching metadata or configuration values to objects without needing separate storage mechanisms. 
Attributes are key-value pairs, where the key is a string and the value can be a number, string, boolean, or other supported data type.

### Using Attributes

You can use **:SetAttribute()** and **:GetAttribute()** to manage attributes on any instance.

```lua
local part = Instance.new("Part")
part:SetAttribute("Health", 100)
print(part:GetAttribute("Health")) -- Outputs: 100
```


You can retrieve attributes with **GetAttribute**. If the attribute doesn’t exist, it returns **nil**.

```lua
local value = part:GetAttribute("Mana")
if value then
    print("Mana:", value)
else
    print("Mana attribute not found.")
end
```

### Listening for Attribute Changes

You can use the **:GetAttributeChangedSignal()** method to listen for changes to a specific attribute.

```lua
part:GetAttributeChangedSignal("Health"):Connect(function() -- The function is now going to run when the signal is received
    print("Health changed to:", part:GetAttribute("Health"))
end)

part:SetAttribute("Health", 80) -- Outputs: Health changed to: 80
```

### Practical Applications 

Attributes can be used for various purposes, such as tracking health, power-ups, or custom properties of objects.

#### Example: A Damage System Using Attributes

This type of system is really common in most games.
People who want to make simple fighting games often use this approach when they don't want to
store data globally.
I personally reccomend using a framework or player object though, (Player:TakeDamage())

Keep in mind a downside of an attribute system is that it relies on instances.
If those instances are by any means deleted, those attributes and that data is gone aswell.
Objects are better for keeping full control over data.

```lua
local part = Instance.new("Part")
part:SetAttribute("Health", 100)

local function takeDamage(amount)
    local currentHealth = part:GetAttribute("Health")
    if currentHealth then
        local newHealth = math.max(0, currentHealth - amount)
        part:SetAttribute("Health", newHealth)
        print("New Health:", newHealth)
    end
end

-- Listen for health changes
part:GetAttributeChangedSignal("Health"):Connect(function()
    local health = part:GetAttribute("Health")
    if health and health <= 0 then
        print("Part destroyed!")
    end
end)

takeDamage(50) -- Outputs: New Health: 50
takeDamage(50) -- Outputs: New Health: 0, Part destroyed!
```

Attributes can store various datatypes, making them versatile for different scenarios.

```lua
local part = Instance.new("Part")
part:SetAttribute("Color", "Red")
part:SetAttribute("IsActive", true)
part:SetAttribute("Score", 42)

print(part:GetAttribute("Color")) -- Outputs: Red
print(part:GetAttribute("IsActive")) -- Outputs: true
print(part:GetAttribute("Score")) -- Outputs: 42
```
####  Example : Indexable Module

This is code from module that lets you index attributes from an instance.
It creates a metatable, which allows you to manage the attributes, by indexing it.

```lua
function Module.MakeIndexable(instance)
	local instanceWrapper = {}
	local metatable = {
		__index = function(tabl, index)
			return instance:GetAttribute(index)
		end,
		__newindex = function(tabl, index, value)
			instance:SetAttribute(index,value)
		end
	}
	return setmetatable(instanceWrapper, metatable)
end
-- local Attributes = Module.MakeIndexable(Part)
-- Attributes.IsActivated = true -- Sets the attribute by indexing it and setting the value

```

You can see that indexing the table gives you a seperate object which allows 
you to easily manage attributes as if they were tables on their own.
Once again, it is extremely important to remember which datatype you are handling!

### Exercises

1. Create a system that tracks the "Power" attribute for multiple parts and prints a message when any part's power exceeds 100.
2. Write a module that automatically resets attributes to default values after a certain period of inactivity.
3. Implement a leaderboard that uses attributes to track and display player scores.

### Relevant Links

[https://create.roblox.com/docs/reference/engine/classes/Instance#SetAttribute](https://create.roblox.com/docs/reference/engine/classes/Instance#SetAttribute)