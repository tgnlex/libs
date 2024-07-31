
function IntCheck(int)
  if type (int) ~= "integer" then 
    error("int expected", 2)
  end
end