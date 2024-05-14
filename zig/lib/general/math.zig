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

fn fibonaccin(n: u16) u16 {
  if (n == 0 or n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n -2)
}

fn matrix(
  comptime T: type,
  comptime width: comptime_int, 
  comptime height: comptime_int, 
) type {
  return [height][width]T;
}
fn addSmallInts(comptime T: type, a: T, b: T) T {
    return switch (@typeInfo(T)) {
        .ComptimeInt => a + b,
        .Int => |info| if (info.bits <= 16)
            a + b
        else
            @compileError("ints too large"),
  }     else 
}

fn GetBiggerInt(comptime T: type) type {
  return@type(.{
    .Int = .{
        .bits = @typeInfo(T).Int.bits + 1,
        .signedness = @typeInfo(T).Int signedness
    }
  })
}