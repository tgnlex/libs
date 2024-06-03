const std = @import("std");
const expect = std.testing.expect;

fn basicAllocator() {
  const alloc = std.heap.page_allocator;
  const log = std.log.info;
  const memory = try allocator.alloc(u8, 100);
  defer allocator.free(memory);
  log("Memory check:", .{memory});
  log("Memory Typecheck: ", .{@TypeOf(memory)});
  try expect(memory.len == 100);

  return memory;
}

