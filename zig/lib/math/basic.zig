fn add(x: u32, y: u32) {
 var results = x + y;
 return results;
}
fn subtr(x: u32, y: u32) {
  var results = x - y;
  return results;
}
fn multiply(x: u32, y: u32) {
  var results = x * y;
  return results;  
}
fn divide(x: u32, y: u32) {
  var results = x / y;
  return results; 
}
fn increment(x: u32) {
  return x = x + 1;
}

fn decrement(x: u32) {
  return x = x - 1;
}

fn fibonacci(n: u16) u16 {
  if (n == 0 or n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n -2)
}


