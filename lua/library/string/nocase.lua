function Nocase (str)
  str = string.gsub(str, "%a", function(c)
    return string.format("[%s%s]", string.lower(c), string.upper(c))
  end)
  return str;
end