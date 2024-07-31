function ExpandStr (str)
  str = string.gsub(str, "$(%w+)", function (n)
    return tostring(_G[n])
  end)
  return str;
end