function PrintKV(table)
  for key, val in  pairs(table) do 
    print(key, val)
  end
end
function SortKV (keys, values)
  table.sort(keys, function (n1, n2) 
    return values[n1] > values[n2]
  end)  
end
