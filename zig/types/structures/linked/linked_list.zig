
fn LinkedList(comptime T: type) type {
  return struct {
    pub const Node = struct {
      prev: ?*Node, 
      next: ?*Node, 
      data: T,
    };
  first ?*Node,
  last: ?*Node,
  len: usize
}