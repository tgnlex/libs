local results = {}
setmetatable(results, {__mode = "v"})
function CreateRGB(red, blue, green)
  local key = red .. "-" .. green .. "-" .. blue;
  if results[key] then return results[key]
  else
    local color = {red = red, green = green, blue = blue}
    results[key] = color;
    return color
  end
end