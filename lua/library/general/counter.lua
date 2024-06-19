function CreateCounter ()
  local i = 0;
  local counter = function ()
    i = i + 1;
    return i;
  end
  return counter();
end

