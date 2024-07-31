local metas = {}
setmetatable(metas, {__mode = "v"})

function SetDefault (table, default)
  local metas = {}
  setmetatable(metas, {__mode = "v"})
  local mt = metas[default]
  if mt == nil then 
    mt = {__index = function() return default end}
    metas[default] = mt;
  end
  setmetatable(table, mt)
  return metas;
end