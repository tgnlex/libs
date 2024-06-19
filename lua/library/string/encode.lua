CGI = {}

function Encode (table)
  local str = ""
  for key,val in Pairs(table) do 
    str = str .. "&" .. Escape(key) .. "=" .. Escape(val) 
  end
  return string.sub(str, 2)
end

function Decode(str)
  for name, value in string.gmatch(str, "([^&=]+)=([^&=]+)") do
    name = Unescape(name)
    value = Unescape(value) 
    CGI[name] = value;
  end
end