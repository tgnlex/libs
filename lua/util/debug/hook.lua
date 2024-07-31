local Counters = {}
local Names = {}

function Hook ()
  local f = debug.getinfo(2, "f").func 
  if Counters[f] == nil then 
    Counters[f] = 1;
    Names[f] = debug.getinfo(2, "Sn")
  else
    Counters[f] = Counters[f] + 1;
  end 
end

function SetHook (trace)
  debug.sethook(trace, "1")
end

function GetName (func)
  local n = Names[func]
  if n.what == "C" then 
    return n.name;
  end
  local loc = string.format("[%s]:%s", n.short_src, n.linedefined)
  if n.namehwat ~= "" then 
    return string.format("%s (%s)", loc, n.name)
  else
    return string.format("%s", loc)
  end
end