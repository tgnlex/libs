const std = @import("std");
const builtin = @import("builtin")

fn detectTest() bool {
  return builtin.is_test
}
fn skipTest() void {
  const skip = error.SkipZigTest;
  return skip;
}

fn testEquality(x, y) {
 const result = try std.testing.expectEqual(x, y);
 return result;
}
// will fail when 
fn testError(expected, actual) {

}
