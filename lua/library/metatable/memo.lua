local results = {}
function MemoStr(str)
  if results[str] then 
    return results[str];
  else
    local res = load(str)
    results[str] = res;
    return res;
  end
end