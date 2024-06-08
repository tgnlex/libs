function Save (name, val, data)
  data = data or {}
  io.write(name, " = ")
  if type(val) == "number" or type(val) == "string" then 
      io.write(BasicSerialize(val), "\n")
    elseif type(val) == "table" then 
      if data[val] then 
        io.write(data[val])
      else 
        data[val] = name; 
        io.write("{}\n")
        for k,v in pairs(val) do 
          local fieldname = string.format("%s[%s]", name, BasicSerialize(k)) 
          Save(fieldname, v, Save)
        end
      end
    else
      TypeError(val)
    end
end