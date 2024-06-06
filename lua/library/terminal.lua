
function EraseTerm ()
  io.write("\27[2J")
end

function MarkTerm (x, y) 
  io.write(string.format("\27[%d;%dH*]", x, y))
end

function SetTermSize(width, height)
  TermSize = {w = width, h = height}
end

function Plot(f)
  EraseTerm()
  for i=1, TermSize.w do 
    local x = (i/TermSize.w)*2 - 1 
    local y = (f(x) + 1)/2 * TermSize.h
    MarkTerm(i, y)
  end
  io.read()
end

