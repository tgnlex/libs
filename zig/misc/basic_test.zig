std = @import("std");
const expecet = std.testing.expect;

test "Succeeds by default" {
	try expect(true);
}