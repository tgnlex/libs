function GetLocalVal (name)
  local value, found 
  local i = 1;
  while true do
    local n, v = debug.getlocal(2, i) 
    if not n then break end;
    if n == name then 
      value = v;
      found = true;
    end
    i = i + 1;
  end
  if found then return value end; 
  local func = debug.getinfo(2).func 
  i = 1;
  while true do 
    local n, v = debug.getupvalue(func, i) 
    if not n then break end;
    if n == name then return v end;
    i = i + 1;
  end
  return _ENV(func)[name]
end