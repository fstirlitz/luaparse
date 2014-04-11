local foo = 1 do foo = 2 end
do local foo = 1 end foo = 2
do local foo = 1 end do foo = 2 end
local foo do foo = 1 do foo = 2 end end
local function foo() end foo()
local a = { a }
local b = { b, b.a, b[a], b:a() }
local b = {} local a = { b, b.a, b[a], b:a() }
local c local a = { b[c] }
local a = function() end a()
local a, b = 1, a
local a, b = 1, function() b = 2 end
local a (a):b():c()
local a, b for i, a, b in c do end
local a, b, c for i, a, b in c do end
local a = {} function a:b() return self end self = nil
repeat local a = true until a
local a = function (b) end b = 0
for a = 1, 5 do end a = 0
