
Variadic Functions are functions that take a variable number of arguments, meaning when you define your function you don't have to define every argument
The unknown arguments are represented by "..."
```lua
function sum(...)
    local args = {...} -- The "..." counts as a tuple, so it can't be indexed directly. It must be packed into a table for accessibility
    local total = 0
    for _, value in ipairs(args) do -- ipairs is a version of pairs for arrays, using number indices
        total = total + value
    end
    return total
end

print(sum(1, 2, 3, 4, 5))  -- Output: 15
```
Additionally, you can also define previous arguments, and let the rest be handled as part of the variadic
```lua
function orderBurger(hasCheese,...)
  local ingredients = {...}
  if hasCheese then
    table.insert(ingredients,1,"Cheese")
  end
  print("Burger ingredients")
  for a,b in pairs(ingredients) do -- i usually use a,b since i work with nested loops often (a,b, then c,d)
    local append = ","
    if a == #ingredients then -- this gets the length of an array
      append = ""
    end
    print(b..append) -- Concatenation (..) combines strings
    end
end
-- don't judge me
orderBurger{true,"Caramelized Onions","Lettuce","Beef Patty","Bacon",
"Tomato","Barbeque Sauce","A little mayonnaise"} -- when a function call spans multiple lines, use curly braces
-- just do this if it's really long in general
-- i wish i didn't have to discover this
```
You can make your own custom events using BindableEvent objects.
They essentially allow you to facilitate communication between two server scripts
Now it's important to understand the distinction between local scripts and server scripts since the next topic is about server-client communication
Insert an object at the required directories shown at the start of the script for this test
```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local customEvent = ReplicatedStorage:WaitForChild("CustomArrayEvent")

local function triggerEvent()
    local playerData = {
        {name = "Mek", score = 100},
        {name = "Addi", score = 80},
        {name = "Ellie", score = 90}
    }
    customEvent:Fire(table.unpack(playerData)) 
-- table.unpack converts arrays into tuples, which are the same datatypes passed when 
-- sending multiple arguments through a function
-- The result is something like :Fire(Table1,Table2,Table3) in this case
end

triggerEvent()
```
Here's an example of the other end of this communication

```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local customEvent = ReplicatedStorage:WaitForChild("CustomArrayEvent")

local function onCustomEventFired(...)
    local playertable = {...}
    for _, player in ipairs(playertable) do -- Remember that 1 "player" is its own table like in the original function
        print(player.name .. " has a score of " .. player.score)
    end
end

customEvent.Event:Connect(onCustomEventFired)
```
You can have data pass between scripts through events, and later you can have data pass between the server and client, when we go over the basic model of every online game

### Relevant Links
[https://create.roblox.com/docs/reference/engine/classes/BindableEvent](https://create.roblox.com/docs/reference/engine/classes/BindableEvent)
[https://www.lua.org/pil/5.2.html](https://www.lua.org/pil/5.2.html)
[https://www.lua.org/pil/11.html](https://www.lua.org/pil/11.html)
[https://www.lua.org/pil/2.5.html](https://www.lua.org/pil/2.5.html)
[https://www.lua.org/pil/19.html](https://www.lua.org/pil/19.html)