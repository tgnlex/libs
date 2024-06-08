function GetField (field)
  local env = _G 
  for w in string.gfind(field, "[%w_]+") do 
    env = env[w];
  end
  return env;
end

function SetField(field, value)
  local table = _G 
  for w, d in string.gfind(field, "([%w_]+)(.?)") do 
    if d == "." then 
      table[w] = table[w] or {}
      table = table[w]
    else
      table[w] = value
    end 
  end
end