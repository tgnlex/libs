function Writef (fmt, ...)
  return io.write(string.format(fmt, Unpack(arg)))
end