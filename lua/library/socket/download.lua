require "luasocket"
function Download(host, file)
  local cursor = assert(socket.connect(host, 80));
  local count = 0 
  cursor:send("GET" .. file .. " HTTP/1,0\r\n\r\n")
  while true do 
    local s, status = ReceiveConn(cursor)
    count = count + string.len(s)
    if status == "closed" then break end 
  end 
  cursor:close()
  print(file. count)
  return file;
end

