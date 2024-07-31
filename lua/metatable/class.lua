function CreateClass (...)
  local class = {}
  setmetatable(class, {__index = function (table, key)
    return Search(key, arg)
  end})
  class.__index = class;
  function class:new (object)
    object = object or {}
    setmetatable(object, class) 
    return object;
  end
  return class;
end

