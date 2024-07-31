function PrintPerm(array)
  for key, val in ipairs(array) do 
    io.write(val, " ")
  end
  io.write("\n")
end

function PermGen (array, n)
  if n == 0 then 
    coroutine.yield(array);
  else 
    for i=1, n do 
      array[n], array[i] = array[i], array[n]
    end
  end
end

function Permutation(array)
  local n = #array;
  local perm = coroutine.wrap(function () PermGen(array, n) end)
  return perm;
end

function ReadPerm(perm)
  for p in perm do 
    printPerm(p);
  end
end