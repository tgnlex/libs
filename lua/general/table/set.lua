Set = {}

function Set.new(t)
  local set = {};
  setmetatable(set, Set.mt)
  for _, l in ipairs(t) do Set[l] = true end 
  return set;
end

function Set.union(x,y)
  if  getmetatable(x) ~= Set.mt or  
      getmetatable(y) ~= Set.mt then 
      error("attempt to 'add' a set with non-set value", 2)
  end
  local result = Set.new{}
  for key in Pairs(x) do result[key] = true end;
  for key in Pairs(y) do result[key] = true end;
  return result;
end
function Set.intersect(x,y)
  local result = Set.new{}
  for key in Pairs(x) do 
    result[key] = y[key]
  end
  return result;
end

function Set.stringify(set)
  local s = "{" 
  local seperator = "";
  for e in Pairs(set) do 
    s = s .. seperator .. e 
    seperator = ", "
  end
  return s .. "}"
end

function Set.print(set)
  print(Set.stringify(set))
end