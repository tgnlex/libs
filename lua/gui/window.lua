-- Window Namespace
Window = {} 
Window.prototype = {x=0, y=0, width=100, height=100}
-- Window metatable
Window.mt = {}  
-- Constructor Function
function Window.new (o)
  setmetatable(o, Window.mt)
  return o 
end
-- Index metamethod
Window.mt.__index = function(table, key)
  return Window.prototype[key]
end
-- Window Generator 
function CreateWindow(x, y, width, height)
  local window = Window.new{
    x=x, y=y, 
    width=width or 100, 
    height=height or 100;
  }; 
  return window;
end