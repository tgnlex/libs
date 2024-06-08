require "luasocket"
local threads = {}

function Get(host, file)
  local coroute = CreateCo(function() 
    Download(host, file)
  end)
  table.insert(threads, coroute)
end

function Dispatcher()
  while true do 
    local n = TableSize(threads)
    if n == 0 then break end 
    local connections = {}
    for i = 1, n do 
      local status, res = coroutine.resume(threads[i])
      if not res then 
        table.remove(threads, i)
        break
      else
        table.insert(connections, res)
      end
    end
    if TableSize(connections) == n then 
      socket.select(connections)
    end
  end
end

