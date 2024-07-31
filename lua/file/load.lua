function LoadF(filename) 
  local file = assert(loadfile(filename))
  return file()
end
