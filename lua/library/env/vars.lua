local globalvars = {}
function Declare(name, init)
  rawset(_G, name, init)
  globalvars[name] = true;
end

setmetatable(_G, {
  __newindex = function (table, name, val)
    if not globalvars[name] then 
      error("attempt to write undeclared variable ." ..name, 2)
    else 
      rawset(table, name, val)
    end
  end,
  __index = function (_, name)
    if not globalvars[name] then
     error("attempt to read undeclared variable ." ..name, 2)
    else
      return nil;
    end
  end
})