

Open studio and load a new baseplate like you did in Topic #1
Make sure the **Properties **and the **Explorer **tabs are visible, If not, check the **View **Tab which is on the highest bar in studio, along with the FILE button you used to open up a new baseplate.

![Alt Text](/markdown/img/t2img1.png)

Those tabs at the top are pretty important for navigating studio, they contain a majority of the tools and ways to view extra utilities you will often use in studio
1. Make sure you have the workspace selected in the **Explorer **, Click on it
2. Create a new part by opening the **Home **tab and clicking the **Part **button
3. Rename the new part to "NewPart" for clarity, you can do this by right clicking the part in the **Explorer**
4. Right click on "NewPart" , and select **Insert Object > Script**
You can search for it, but generally it should be around the top

![Alt Text](/markdown/img/t2img2.png)

5.  Double click on the script you inserted into the part, This will open the script editor

When you open up a script for the first time, you'll likely see something along the lines of this
```lua
print("Hello, world!")
```
A **string** is a datatype in lua, it is defined by two "quotes" surrounding text. the **print** function is a built-in function to Lua, it prints out text in the **Output** the **Output** is a window that prints out all relevant information, errors, warnings, and stack traces.
 You can view this window by opening the **View** tab and making sure output is true, or by right clicking the tab.
 
 ![Alt Text](/markdown/img/t2img3.png)

What that placeholder code does, is it prints out "Hello, world!" to the output, very simple
the basic form of a function in Lua is 
* functionName(Argument1,Argument2,Argument3)

an **Argument** is any value the function is "given" and is able to act on as a result, Functions can also access things that are not arguments, 
see [https://create.roblox.com/docs/luau/scope](https://create.roblox.com/docs/luau/scope) for more information
Basically, there is only 1 argument to the print function, and all of the arguments are inside of the parentheses immediately after the name of the function

It's important to remember that every line of code you will ever write falls into a few categories
* Assigning a name to a variable (**local part = workspace.Part**)
* Running a function (**print("Hello, world!")**)
* Typing out different types of statements (return, if, else)

### Writing our first script
Clear out the entire script and practice typing this in :
```lua
local part = script.Parent
part.BrickColor = BrickColor.new("Bright red")
```
It's important that you stick to typing things out while you're learning, it will help you memorize these things when you're not reading a tutorial
```lua
local part = script.Parent
```
Line 1  creates a **Variable** which is essentially a shorthand or nickname for something else.
**Variables **can either be **pointers/references** which allow the script to access something at a certain directory or place in memory
or the actual object, which can be deleted when the variable is set to nil
Think of variables as a box, and in the box you can have anything you want
the box would be the variable, and whatever's in the box would be a value.

If i create a new string value like :
```lua
local Name = "junior"
```
You can imagine a box labeled "Name", and a little slip of paper that reads "junior" on the inside
```lua
part.BrickColor = BrickColor.new("Bright red")
```
Back to our original script, Line 2 is an assignment
If you remember from the previous topic, properties are **Indexable** like actual child instances (**part.part2**)
Here, you can see the **operator** shown as "=" used to change the value of something
In this instance, the .BrickColor property is being changed to a different BrickColor value
1. Click the play button under the **Home **tab
2. You should see the part change to a bright red color.

### Summary
* Variables - Names for "boxes" which store values in scripts
* Operators - Ways to manipulate values in scripts
* Functions - A set of instructions that takes inputs and has outputs
* Arguments - An input to a function
* The Output - A window which prints out relevant information to scripts
* = - The assignment operator, which sets the value of something on the left to whatever is on the right
* print - A built-in Lua function that types out its arguments in the Output

### Relevant Links

[https://www.lua.org/manual/5.1/manual.html#2.3](https://www.lua.org/manual/5.1/manual.html#2.3)

[https://create.roblox.com/docs/tutorials/scripting/basic-scripting/intro-to-scripting](https://create.roblox.com/docs/tutorials/scripting/basic-scripting/intro-to-scripting)

[https://create.roblox.com/docs/tutorials/first-experience](https://create.roblox.com/docs/tutorials/first-experience)

### Additional Practice
Try messing with other properties of the part, like the **Size**
```lua
local part = script.Parent
part.Size = Vector3.new(10, 1, 10)
```
Use a more advanced system for manipulating color

```lua
local part = script.Parent
part.Color = Color3.FromRGB(255,12,255)
```
Change the position of the part

```lua
local part = script.Parent
local newPosition = Vector3.new(10, 1, 10)
part.CFrame = CFrame.new(newPosition)}
```