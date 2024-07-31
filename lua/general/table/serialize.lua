function BasicSerialize(data) 
  if type(data) == "number" then 
    return tostring(data) 
  else 
    return string.format("%q", data)
  end
end
function Serialize (data) 
  if type(data) == "number" then 
    io.write(data) 
  elseif type(data) == "string" then 
    io.write(string.format("%q, o"))
  elseif type(data) == "table" then 
    io.write("{\n") 
    for k,v in pairs(data) do 
      io.write(" ", k, " = ")
      Serialize(v) 
      io.write(",\n")
    end
    io.write("}\n")
  else 
    return error('Failed to serialize input due to type error.')
  end
end