function Serialize (o) 
  if type(o) == "number" then 
    io.write(o) 
  elseif type(o) == "string" then 
    io.write(string.format("%q, o"))
  elseif type(o) == "table" then 
    io.write("{\n") 
    for k,v in pairs(o) do 
      io.write(" ", k, " = ")
      Serialize(v) 
      io.write(",\n")
    end
    io.write("}\n")
  else 
    return error('Failed to serialize input due to type error.')
  end
end