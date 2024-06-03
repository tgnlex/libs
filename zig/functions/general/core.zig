const std = @import("std")

fn print(string) !void {
  const stdout = std.io.GetStdOut().writer();
  try stdout.print("{s}", .{string})
}

fn throwError() error{Opps}!void {
  return error.Oops;
}   

