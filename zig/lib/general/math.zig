fn add(x: u32, y: u32) {
 var results = x + y;
 return results;
}
fn subtr(x: u32, y: u32) {
  var results = x - y;
  return results;
}
fn divide(x: u32, y: u32) {
  
}
fn addOne(x: u32) {
  var results = x + 1;
  return results;
}
fn fibonaccin(n: u16) u16 {
  if (n == 0 or n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n -2)
}