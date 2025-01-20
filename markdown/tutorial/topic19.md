### Simulating Object-Oriented Programming in Lua

Lua does not have built-in support for object-oriented programming (OOP), but you can simulate it using tables and metatables.

### Classes and Instances

A **class** is represented as a table, and an **instance** is another table that uses the class as its metatable. 
Here, the word instance doesn't mean the literal roblox instance but rather the direct meaning of the word **instance**
The **__index** metamethod allows instances to inherit behavior from their class.

#### Defining a Class

```lua
local Animal = {} -- The class
Animal.__index = Animal -- Sets up inheritance for instances
-- the __index metamethod makes the class functions run 
-- when the function isn't found in the instance of that class
function Animal.new(name)
    local instance = {
        name = name,
        health = 100
    } -- Notice how the table doesn't have any functions directly stored inside
    setmetatable(instance, Animal)
    return instance
end

function Animal:speak()
    print(self.name .. " makes a noise.")
end

local dog = Animal.new("Dog") 
dog:speak() -- The function is accessed through the class, not the instance.
```

### Methods

By convention, methods use the colon syntax (:), which automatically passes **self** as the first argument to the function. 
This allows methods to access the instance's properties.

#### Adding More Methods

```lua
function Animal:takeDamage(amount)
    self.health = math.max(self.health - amount, 0)
    print(self.name .. " has " .. self.health .. " health left.")
end

local cat = Animal.new("Cat")
cat:takeDamage(30) -- Cat has 70 health left.
```

### Class Inheritance

Inheritance allows one class to reuse and extend the functionality of another. 
This is achieved by setting one class as the metatable for another 
and assigning its **__index** to the parent class.

#### Creating a Subclass

```lua
local Dog = {} -- Subclass
Dog.__index = Dog
setmetatable(Dog, Animal) -- Inherits from Animal
-- Causes things not found in Dog to be located in Animal

function Dog.new(name, breed)
    local instance = Animal.new(name) -- Use the parent class constructor
    instance.breed = breed
    setmetatable(instance, Dog)
    return instance
end

function Dog:speak()
    print(self.name .. " barks.")
end

local bulldog = Dog.new("Bulldog", "English Bulldog")
bulldog:speak() -- Outputs: Bulldog barks.
bulldog:takeDamage(20) -- This function isn't in Dog but is defined in Animal
```

### Overriding Methods

Subclasses can override methods from their parent class by redefining them.

#### Overriding speak

```lua
function Dog:speak()
    print(self.name .. " says woof.")
end

local beagle = Dog.new("Beagle", "Hound")
beagle:speak() -- Outputs: Beagle says woof.
```

### Multiple Inheritance

Lua does not support multiple inheritance directly, but you can simulate it by chaining metatables or copying methods from multiple parent classes.

#### Mixing Methods from Multiple Classes

```lua
local Walker = {}
Walker.__index = Walker

function Walker:walk()
    print(self.name .. " is walking.")
end

local Swimmer = {}
Swimmer.__index = Swimmer

function Swimmer:swim()
    print(self.name .. " is swimming.")
end

local Amphibian = {}
Amphibian.__index = Amphibian

function Amphibian.new(name)
    local instance = { name = name }
    setmetatable(instance, Amphibian)
    return instance
end

setmetatable(Amphibian, Walker)
for k, v in pairs(Swimmer) do
    Amphibian[k] = v -- Copy Swimmer methods into Amphibian
end

local frog = Amphibian.new("Frog")
frog:walk() -- Outputs: Frog is walking.
frog:swim() -- Outputs: Frog is swimming.
```

### Applications 

#### Player Classes

OOP can help manage player-specific data and behavior.

```lua
local Player = {}
Player.__index = Player

function Player.new(name)
    local instance = {
        name = name,
        level = 1,
        experience = 0
    }
    setmetatable(instance, Player)
    return instance
end

function Player:gainExperience(amount)
    self.experience = self.experience + amount
    print(self.name .. " gained " .. amount .. " XP.")

    if self.experience >= 100 then
        self.level = self.level + 1
        self.experience = self.experience - 100
        print(self.name .. " leveled up to " .. self.level .. "!")
    end
end

local player1 = Player.new("Alice")
player1:gainExperience(120)
-- Outputs:
-- Alice gained 120 XP.
-- Alice leveled up to 2!
```

The key focus is the ability to store functions easily without 
defining them outside of the object.
You will be able to easily edit and modify functions relative to a set of data
and this type of "Player" structure is actually used in many games.

### Key Takeaways

1. Simulate **OOP** in Lua using tables, metatables, and the **__index** metamethod.
2. Use inheritance to extend functionality between classes.
3. Leverage OOP for better organization and scalability in game development.



### Exercises

1. Create a base class **Vehicle** with subclasses **Car** and **Bike**. Add methods like **move** and **stop** for each class.
2. Implement multiple inheritance for a hybrid class **FlyingCar** that combines features of **Vehicle** and a **Flyer** class.
3. Extend the **Player** class to include inventory management with methods like **addItem** and **removeItem**.



### Relevant Links

[https://www.lua.org/pil/13.4.1.html](https://www.lua.org/pil/13.4.1.html)

