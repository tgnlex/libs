function fib(n)
  if n < 2 then return 1 end
  return fib(n - 2) + fib(n - 1)
end

function add(x, y)
  return x + y;
end

function subtr(x, y)
  return x - y;
end

function mult(x, y)
  return x * y;
end