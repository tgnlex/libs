function NewStack ()
  return {""}
end

function UpdateStack (stack, str)
  table.insert(stack, str)
  for i=TableSize(stack)-1, 1, -1 do 
    if string.len(stack[i]) > string.len(stack[i+1]) then 
      break
    end
    stack[i] = stack[i] .. table.remove(stack)
  end
end