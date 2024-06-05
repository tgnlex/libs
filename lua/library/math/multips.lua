function Double(x)
  local result = x*2;
  return result;
end

function Triple(x)
  local result = x*3;
  return result;
end

function Factorial(n) 
  if n == 0 then 
    return 1 
  else 
    return n * Factorial(n - 1)
  end
end
