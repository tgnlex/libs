function StrCheck(str)
  if type (str) ~= "string" then 
    error("string expected", 2)
  end
end