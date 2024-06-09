function RenameF (arg)
  return os.rename(arg.old, arg.new)
end

function LoadF(filename) 
  local file = assert(loadfile(filename))
  return file()
end

function Writef (fmt, ...)
  return io.write(string.format(fmt, Unpack(arg)))
end