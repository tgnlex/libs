var std = @import("std");

const HTTPRequestMethod = enum { GET, POST, PUT, PATCH, DELETE, HEAD, TRACE, CONNECT, OPTIONS };

const HTTPHeader = struct {
    requestLine: []const u8,
    host: []const u8,
    userAgent: []const u8,
    pub fn print(self: HTTPHeader) void {
        std.debug.print("{s} - {s}\n", .{
            self.requestLine,
            self.host,
        });
    }
};
