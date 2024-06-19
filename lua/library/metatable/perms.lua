function ReadOnly (table)
  local proxy = {}
  local mt = {
    __index = table,
    __newindex = function (table, key, val)
      error("attempted to update a read-only table", 2)
    end
  } 
  setmetatable(proxy, mt) 
  return proxy;
end