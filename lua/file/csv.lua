function ToCSV(table)
  local str = ""
  for _,p in pairs(table) do 
    str = str .. "," .. EscapeCSV(p) 
  end
  return string.sub(str, 2)
end

function EscapeCSV (str)
  if string.find(str, '[,"]') then 
    str = '"' .. string.gsub(s, '"', '""') .. '"'
  end
  return str
end

function FromCSV (str) 
  str = str .. ','
  local table = {}
  local fieldstart = 1;
  repeat 
    if string.find(str, '^"', fieldstart) then 
      local a, c;
      local i = fieldstart 
      repeat 
        a, i, c = string.find(str, '"("?)', i+1)
      until c ~= '"'; 
      if not i then error('unmatched "') end 
      local f = string.sub(str, fieldstart+1, i-1)
      table.insert(table, (string.gsub(f, '""', '"')))
      fieldstart = string.find(str, ',', i) + 1 
    else 
      local nexti = string.find(str, ',', fieldstart)
      table.insert(table, string.sub(str, fieldstart, nexti-1))
      fieldstart = nexti + 1;
    end
  until fieldstart > string.len(str) 
  return table;
end
