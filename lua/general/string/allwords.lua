function AllWords ()
  local line = io.read()
  local position = 1;
  local result = function()
    while line do 
      local s, e = string.find(line, "%w+", position)
      if s then  
        position = e + 1;
        return string.sub(line, s, e) 
      else
        line = io.read(); 
        position = 1;
      end 
    end
    return nil;
  end
  return result();
end

