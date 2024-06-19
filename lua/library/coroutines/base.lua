function CreateCo(func, params)
  local coroute = coroutine.create(func(params))
  return coroute;
end

function Send(x)
  coroutine.yield(x);  
end

function Receive(producer)
  local status, val = coroutine.resume(producer) 
  return val;
end

