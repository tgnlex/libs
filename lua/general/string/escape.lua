function Escape (str)
  str = string.gsub(str, "([&=+%c])", function (c)
      return string.format("%%%02X", string.byte(c))
    end)
  str = string.gsub(str, " ", "+")
end

function Unescape (str)
  str = string.gsub(str, "+", " ")
  str = string.gsub(str, "%%(%x%x)", function (h)
      return string.char(tonumber(h, 16))
    end)
    return str;
  end

  