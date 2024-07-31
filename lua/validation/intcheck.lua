function StrCheck(str)
  if type (str) ~= "string" then 
    error("string expected", 2)
  end
end
function IntCheck(int)
  if type (int) ~= "integer" then 
    error("int expected", 2)
  end
end