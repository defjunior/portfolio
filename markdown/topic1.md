
To be honest, there's no other way to learn the ins and outs of studio faster than actually checking out what roblox has to offer for it 

If you check out this link, [https://create.roblox.com/docs/get-started](https://create.roblox.com/docs/get-started) you can see they have a tour option here (if you don't know how to set your studio to dark mode, you should do that immediately before continuing) 

If you have no clue what an "Explorer" is, this is probably your best bet to start learning how studio even works 

When your done with that, you should figure out how to open up a baseplate, 
you can always click the "FILE" button in the top left of any studio tab, and it should bring you to that menu

![Alt Text](/portfolio/markdown/img/t1img1.png)

Clicking the new button should open up a default template that looks like this

![Alt Text](/portfolio/markdown/img/t1img2.png)

This is the main interface of studio, with the game viewport showing you exactly what's in the workspace directory, shown by the explorer on the right

### The Explorer
This window shows you the **file directory** of everything that's in your game, By default you see everything that's under the game directory
If you're familiar with **file systems**, you know how file directories on windows are like **C:\ProgramFiles\Something**
A **directory** is a tag that describes the location of something in folders
For example, if we had two boxes, and we put one box in the other box, then a ball inside of the box, we would say the directory of the ball would be :
* The biggest box, the smaller box inside of the bigger box, and then finally the ball.
In Roblox, it's the exact same way, just with dots **(game.Workspace)**
Opening up the workspace might show something like this :

![Alt Text](/portfolio/markdown/img/t1img3.png)

The part that you see with the weird texture on it is a **SpawnLocation**, very self explanatory, you spawn on top of it when you join the game
However, what's more important is that its something you can see on **both the Viewport and the Explorer because it's under the workspace**
The directory for that SpawnLocation would be **game.Workspace.SpawnLocation**
What this means, is that the **Workspace is a parent of the SpawnLocation**, and **the SpawnLocation is a child of the workspace**
This isn't just some weird slang but are actual terms for how to refer to objects relative to each other in directories, and are the names of some important functions covered later on
objects have properties that can be accessed the same way parts are accessed under directories, like how we mentioned the directory for the spawn location
For example, the SpawnLocation is a part with the "BrickColor" Property
To read it in a script, you would have to get the directory of the property.
Using print(**workspace.SpawnLocation.BrickColor**) in a script would give you the color of the part, likely "Dark grey metallic"

### Directories, Parents, and Children
I used the term object earlier, but that's very vague, what we're dealing with are Instances, these are actual "things" that the roblox engine recognizes, and object is usually used to describe systems of tables and arrays that store data in a script environment, outside of the game directory.

Ultimately, the directory system is just a series of parents and children
there is a .Parent property for every instance, and setting something like **Part.Parent = Part2**, would change the structure of the directory
a **Parent** is an instance that is set as the parent under the .Parent property for multiple "children"

![Alt Text](/portfolio/markdown/img/t1img4.png)

In this case, the Workspace is a parent of the Camera, Terrain, SpawnLocation and the Baseplate
you would be able to access the Camera through **game.Workspace.Camera**
Camera, Terrain, SpawnLocation, and the Baseplate would all be considered **Children**
an **Ancestor** would be anything that is the parent or grandparent or anything above just the parent of a child

![Alt Text](/portfolio/markdown/img/t1img5.png)

In this case, the **Workspace** would be an ancestor of **Texture** since it's higher up than just the parent (Baseplate)
* game.Workspace
vs
* game.Workspace.Baseplate.Texture

You can see how there's 1 instance in distance, or sort of like 1 generation if you were thinking in terms of a family tree
a **Descendant** would be anything that is a child of a child under the original instance
the **Texture** would be a **Descendant** of the workspace
That's the basics of how directories work and the related terminology
You'll work with extremely relevant functions later on with names like 
* :GetChildren() :FindFirstChild, :GetDescendants()
This is really the most foundational thing to learn in scripting, since it's the way you access anything to even perform actions on through scripts

### Summary
* Ancestor - Anything including and beyond a parent of a parent
* Descendant - Anything including and below a child of a child
* Child - An instance with a .Parent property set to a parent
* Parent - An instance with a child, something that has it's .Parent property set to it
* The Explorer - A window that shows the file directory of your game
* The Workspace - A service/instance that represents everything that is visible and can be acted upon with physics
* Opening a Baseplate - Clicking "FILE" in the top left and clicking New
* Directory - A tag that describes the location of something in folders / children to a parent instance (game.Workspace)
* Viewport - Window in the center that shows you a view of everything in the Workspace

### Relevant Links
https://create.roblox.com/docs/tutorials/scripting/basic-scripting/intro-to-scripting
https://create.roblox.com/docs/tutorials/first-experience