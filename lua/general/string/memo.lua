
function MemoStr(str)
  local results = {}
  if results[str] then 
    return results[str];
  else
    local res = load(str)
    results[str] = res;
    return res;
  end
end