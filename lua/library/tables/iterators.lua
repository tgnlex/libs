function Iterate(table) 
  local i = 0;
  local n = table.getn(table) 
  local result = function ()
    i = i + 1;
    if i <= n then 
      return table[i];
    end
  end
  return result();
end
-- stateless array iterator
function StatelessIter(array, iter)
  iter = iter + 1;
  local val = array[iter];
  if val then 
    return iter, val;
  end
end

function StateIter (state)
  while state.line do 
    local str, e = string.find(state.line, "%w+", state.pos)
    if str then 
      state.pos = e + 1;
      return string.sub(state.line, str, e)
    else 
      state.line = io.read(); 
      state.pos = 1;
    end
  end 
  return nil
end

function IterPrint(table)
  local i = Iterate(table);
  while true do 
    local element = i();
    if element == nil then 
      break
    end
    print(element)
  end
end