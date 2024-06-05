function Fwrite (fmt, ...)
  return io.write(string.format(fmt, unpack(arg)))
end