function Filter(producer) 
  return CreateCo(function ()
    local line = 1;
    while true do 
      local x = Receive(producer) 
      x = string.format("%5d %s", line, x) 
      Send(x); 
      line = line + 1;
    end 
  end)
end