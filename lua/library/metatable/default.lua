local key = {}
local mt = {__index = function () return table[key] end}

function SetDefault (table, default)
  table[key] = default 
  setmetatable(table, mt)
end