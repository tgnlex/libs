
function SendCo(x)
  coroutine.yield(x);  
end

function RecvCo(producer)
  local status, val = coroutine.resume(producer) 
  return val;
end

