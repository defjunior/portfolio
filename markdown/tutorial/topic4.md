

A **Datatype** refers to the type of data a variable is, there are many datatypes like :
* string
* number
* boolean
Let's go over the basic datatypes, advanced datatypes will be covered later on.

### String Datatype
A string is a sequence of characters inside of quotes, they hold text.
```lua
local newstringvalue = "stuff, including whitespace characters" 
```
### Number Datatype
A number is simply any type of numerical value, they can be either an **integer** or a **decimal** 
An **integer** is any whole number, numbers with zeroes after the decimal point, counting numbers like 1,2,3,4
A **decimal** is any number that contains numbers after the decimal point,  like 3.14 or 6.28
```lua
local year = 2024
local twopi = 6.28
-- twopi would be a decimal, year would be an integer, notice the lack of decimal point in year.
```
### Boolean Datatype
A boolean represents a binary state, either true or false, like the answer to a yes or no question.
```lua
local newBool = true
local notTrue = false
```
## Operator Types

### 1. Arithmetic Operators
These are operators you use for mathematical operations
```lua
local sum = 10 + 5
local difference = 10 - 5
local product = 10 * 5
local exponential = 10 ^ 2 -- this returns 100, like 10 * 10
local quotient = 10 / 5
local modulus = 10 % 3 -- Modulo '%' returns the remainder after division by the right number.
```
You can also represent a number using scientific notation
```lua
local oneMillion = 1e6 -- 1 , with 6 zeroes after it (1,000,000)
```
### 2. Comparison Operators
These operators are used to compare values on either side, and to return a **boolean**
All of the following variables are equal to true, the actual operator itself is listed on the right
```lua
local isEqual = (10 == 10)    --  ==
local isNotEqual = (10 ~= 5)  -- ~=
local isGreater = (10 > 5)    -- >
local isLess = (5 < 10)       -- <
local isGreaterOrEqual = (10 >= 5)  -- >=
local isLessOrEqual = (5 <= 10)     -- <=
```
### 3. Logical Operators
These operators are used to manipulate boolean values
For more information, do research into "logic gates"
Logic gates are the fundamental basis of all computing, and are present here in the form of :
* and
* or
* not
```lua
local andResult = (true and false)  -- false
local orResult = (true or false)    -- true
local notResult = not true          -- false
```
### Summary
* Boolean - a true or false value
* String - a value that stores text, represented by characters between quotes
* Number - a value that stores numerical values, either a whole number/integer (1) or a fractional decimal (2.3)
* and - Logical operator that returns true of values on both side are true, otherwise false
* or - Logical operator that returns true if atleast one value on both side is true
* not - Logical operator that flips a boolean value from true to false, vice versa

###  Relevant Links

[https://www.lua.org/pil/2.html](https://www.lua.org/pil/2.html)

[https://www.lua.org/pil/3.html](https://www.lua.org/pil/3.html)

[https://www.lua.org/manual/5.1/manual.html#2.5](https://www.lua.org/manual/5.1/manual.html#2.5) (see 2.5.1)