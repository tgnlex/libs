function OpenPkg(ns)
  for name, val in pairs(ns) do 
    if _G[name] ~= nil then 
      error("name clas: " .. name .. "is already defined")
    end
    _G[name] = val
  end
end

function SetPkgMT(package, location)
  local package = package or {}
  setmetatable(package, {__index = function (table, func)
    local file = location[func]
    if not file then 
      error("package does not define " .. func)
    end 
    assert(loadfile(file))()
    return table[func]
  end})
  return package;
end