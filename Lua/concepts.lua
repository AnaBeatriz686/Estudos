-- The print function with a variable
local username = "John"
print("Hello " .. username .. ", welcome to Lua")
-- The print function with a break
print("Welcome! \nYou're learning Lua!")
-- The print function with quotations
print("John said \"I know all of Lua\"")

-- The key word 'local' is used to create variables that only exist within a specific block of code or a loop or a function
local likes = 100
print("The number of likes in your post is " .. likes)
-- Updating variable
likes = likes + 50
print("The number of likes in your post is " .. likes)

-- Common data types are: numbers (integers or floating points), string (sequence of characters), boolean (true or false), table (stores collection of data), function (stores functions) and nil (absence of a value - nothing or empty)
local age = 20 -- integer
local height = 5.5 -- float
print("age: " .. age)
print("height: " .. height)

local greeting = "Hello!" -- string
print(greeting)
local isRaining = true -- boolean
if isRaining then -- Conditional
    print("Bring an umbrella!")
else
    print("No need to worry!")
end

isRaining = false -- Updating variable
if isRaining then -- Conditional
    print("Bring an umbrella!")
else
    print("No need to worry!")
end

local fruits = {"apple", "banana", "cherry"} -- table as an array
print(fruits[1]) -- apple (the index starts from 1)

local person = {name = "Alice", age = 30, job = "Engineer"} -- table as key and value
print(person.name .. " " .. person.age .. " " .. person.job)

local greet = function(name) -- functions as variables
    return "Hello " .. name
end
print(greet("Sam"))

local age = 25
print(age)
local age = nil -- variable nil
print(age)

-- Arithmetic Operations (Math)
local num1 = 12
local num2 = 5
print(num1 + num2) -- adds
print(num1 - num2) -- subtracts
print(num1 / num2) -- divides
print(num1 * num2) -- multiplies
print(num1 % num2) -- module
print(num1 ^ num2) -- power of

-- Relational Operations (Comparisons)
local player1Score = 150
local player2Score = 200
print(player1Score == player2Score) -- false
print(player1Score < player2Score) -- true
print(player1Score > player2Score) -- false

-- Logical Operations (Making Decisions)

local playerLevel = 5
local playerHealth = 50

if playerLevel > 3 and playerHealth > 30 then
    print("Bonus unlocked")
else
    print("You need more health or level.Welcome")
end

if playerHealth > 0 or playerLevel >- 10 then
    print("You are still in the game!")
end
