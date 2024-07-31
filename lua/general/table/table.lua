function Table(data)
  return {data}; 
end



function Unpack(table, index)
  index = index or 1;
  if table[index] ~= nil then 
    return table[index], Unpack(table, index + 1);
  end
end

function TableSize(table)
  local count = 0;
  for _, __ in pairs(table) do
    count = count + 1;
  end
  return count;
end