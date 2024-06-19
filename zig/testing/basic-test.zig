std = @import("std");
const expect = std.testing.expect;

test "Succeeds by default" {
	try expect(true);
}