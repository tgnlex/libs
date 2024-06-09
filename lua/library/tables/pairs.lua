function Pairs(table)
  return next, table, nil;
end

function PairsByKey(table, func)
  local array = {};
  for n in Pairs(table) do 
    table.insert(array, n) 
  end
  table.sort(array, func) 
  local i = 0;
  local iterator = function ()
    i = i + 1;
    if array[i] == nil then 
      return nil 
    else 
      return array[i], table[array[i]]
    end
  end
  return iterator();
end

