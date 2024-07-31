function Plot(f)
  EraseTerm()
  for i=1, TermSize.w do 
    local x = (i/TermSize.w)*2 - 1 
    local y = (f(x) + 1)/2 * TermSize.h
    MarkTerm(i, y)
  end
  return io.read()
end
