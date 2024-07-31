function AddVals (array)
  local result = 0;
  for key,val in ipairs(array) do 
    result = result + val;
  end 
  return result;
end

function MaxVal (array)
  local x = 1;
  local y = array[x];
  for key,val in ipairs(array) do 
    if val > y then
      x = key 
      y = val 
    end
  end
  return y, x 
end