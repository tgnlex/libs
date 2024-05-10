

const Node = struct {
    prev: ?*Node, 
    next: ?*Node, 
    data: T,
  };
  fn LinkedList(comptime T: type) type {
  return struct {
  nodes: Node[],
  first ?*Node,
  last: ?*Node,
  len: usize
}  
}