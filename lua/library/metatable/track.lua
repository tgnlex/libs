local index = {}
local mt = {
  __index = function(table, key)
    print("*access to element " .. tostring(key))
    return table[index][key] 
  end,
  __newindex = function(table, key, val)
    print("*update of element " .. tostring(key) .. 
                         " to " .. tostring(val))
    table[index][key] = val 
  end
}

function Track (table)
  local proxy = {}
  proxy[index] = table;
  setmetatable(proxy, mt)
  return proxy;
end