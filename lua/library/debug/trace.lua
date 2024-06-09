function BasicTrace ()
  return print(debug.traceback())
end
function TraceEvent (event, line)
  local s = debug.getinfo(2).short_src
  print(s .. ":" .. line)
end
function TraceInfo ()
  local level = 1; 
  while true do 
    local info = debug.getinfo(level, "Sl")
    if not info then break end
    if info.what == "C" then 
      print(level, "C function")
    else
      print(string.format("[%s]:%d", info.short_src, info.currentline))
    end
    level = level + 1;
  end
end