function RecvCo(producer)
  local status, val = coroutine.resume(producer) 
  return val;
end
