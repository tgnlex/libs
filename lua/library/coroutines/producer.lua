function Producer ()
  local coroute = CreateCo(function ()
  while true do 
    local x = io.read()
    Send(x);
    end
  end)
  return coroute;
end