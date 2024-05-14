fn Ver(
  comptime count: comptime_int,
  comptime T: type, 
) type {
  return struct { 
    data: [count]T,
    const Self = @This();
    
    fn abs(self: Self) Self {
      var tmp = Self{ .data = undefined};
      for (self.data, 0..) |elem, i| {
        tmp.data[i]  = if (elem < 0)
          -elem
          else
          elem;
      }
      return tmp;
    } 
    fn init(data: [count]T) Self {
        return Self{ .data = data};
    }
    
                                                                                                                          o
  };
}
const eql = @import("std").mem.eql;