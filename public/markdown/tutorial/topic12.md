
### Modules
Modules are part of a larger idea in scripting, where you want to avoid writing useless or repetitive lines of code
[https://www.techopedia.com/definition/33513/dry-principle](https://www.techopedia.com/definition/33513/dry-principle)
It's called the **DRY principle**, meaning **Don't Repeat Yourself**
Whenever we write new functions or define them in a certain environment, we want to make sure
that we know whether or not we're using that function again, and we know where to put it so it can be reused in multiple scripts
The best place to put code like that is in a module script.

Module scripts are a type of script** that use a lone return statement to return 1 value at the end of the script**
Usually, this value is a table containing all of the functions or data you want to be accessible between scripts.

An example of how module scripts are generally written:
```lua
local MathModule = {}

function MathModule.add(a, b)
    return a + b
end

function MathModule.subtract(a, b)
    return a - b
end

return MathModule
```
In this case, our module script is returning 1 value, a dictionary with two functions at the keys "add" and "subtract"
Now, we have a module script, so we can use it from many different scripts using the **require()** built-in function
To use the module as if the table were a variable in your other script, you have to assign a variable to the output of the require function
```lua
local MathModule = require(game.ServerScriptService.MathModule)

local sum = MathModule.add(5, 3)
print("Sum: " .. sum)  -- Output: Sum: 8

local difference = MathModule.subtract(10, 4)
print("Difference: " .. difference)  -- Output: Difference: 6
```
### More Module Features

Modules are highly versatile and can contain:
* Nested Tables: You can create submodules within a module.
* States : Their internal data can be updated during runtime

Here's an example :

```lua
local Combat = {
    Weapons = {},
    Skills = {}
}

function Combat.Weapons.swordDamage(baseDamage, multiplier)
    return baseDamage * multiplier
end

function Combat.Skills.calculateCooldown(baseCooldown, haste)
    return baseCooldown / (1 + haste)
end

return Combat
```

### Maintained Module States

TLDR : The module's internal data is persistent and can be updated by anything that calls require() and edits it

Here's the long explanation :
The require function takes the instance of a module script from the directory, and returns a "return table", 
This cached return table is by default is what is originally written in your module script.
It is reused whenever any script calls require() on that exact module.
The result is a behavior where the contents of a module script can effectively 
be edited at runtime, and those changes will be replicated.


```lua
-- First Script
local MathModule = require(game.ServerScriptService.MathModule)
-- Our original script does not have this function
function MathModule.multiply(a, b) 
    return a * b
end

-- Create a new script to run 5 seconds after this module is edited
-- Second Script
task.wait(5)
local MathModule = require(game.ServerScriptService.MathModule)
print(MathModule.multiply(2,4)) -- 2 * 4 = 8
-- The multiply function doesn't exist in the original module script
```
### Relevant Links
[https://create.roblox.com/docs/tutorials/fundamentals/coding-6/coding-concept-abstraction](https://create.roblox.com/docs/tutorials/fundamentals/coding-6/coding-concept-abstraction)
[https://create.roblox.com/docs/tutorials/fundamentals/coding-6/coding-concept-algorithms](https://create.roblox.com/docs/tutorials/fundamentals/coding-6/coding-concept-algorithms)
[https://create.roblox.com/docs/tutorials/fundamentals/coding-6/intro-to-module-scripts](https://create.roblox.com/docs/tutorials/fundamentals/coding-6/intro-to-module-scripts)
[https://create.roblox.com/docs/tutorials/fundamentals/coding-6/creating-with-module-scripts](https://create.roblox.com/docs/tutorials/fundamentals/coding-6/creating-with-module-scripts)