function Consumer(producer)
  while true do 
    local x = Receive(producer)
    io.write(x, "\n")
  end
end