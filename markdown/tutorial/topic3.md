As you saw in the previous topic, we worked with a script like this :

```lua
local  part = script.Parent
part.BrickColor = BrickColor.new("Bright red")
```

However, the part involving "**BrickColor.new**" was left relatively unexplained, that's my fault

"**BrickColor.New**" is a **Constructors** These are methods that create a new object of the datatype they are named after

**Vector3.New** creates a new vector3 value, which contains X, Y, and Z values as properties

**Instance.New** creates new instances. The first argument is the class name of the instance, so :

```lua
local  createdPart = Instance.new("Part")
```

creates a new variable named createdPart, with the value of a brand new part created from thin air
If you wanted to actually see that part, you would need to have it as a child of the workspace since new instances by default have no parent, but are also not **nil**
(nil is something you can use to say or check if something doesn't exist, 
like **print(1 == nil )**)


```lua
local  createdPart = Instance.new("Part")
createdPart.Parent = game.Workspace
```
There are many constructors, the most notorious ones being :
* CFrame
* TweenInfo
* Vector3
* NumberSequence & NumberRange
* Instance
* Color3
* BrickColor
and many others

### Summary
* Constructor - A method that creates an object with the datatype it's named after
* Instance.new - A constructor that creates a new instance object