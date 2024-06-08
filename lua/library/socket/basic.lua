require "luasocket"

function ReceiveConn (conn)
  conn:timeout(0) 
  local s, status = conn:receive(2^10)
  if status == "timeout" then 
    coroutine.yield(conn)
  end
  return s, status
end
