function Search (key, table)
  for i = 1, TableSize(table) do 
    local v = table[i][key] 
    if v then return v end;
  end
end 