const Window = opaque {
  fn show(self: *Window) void {
    show_window(self);
  }
};


extern fn show_window(*Window) callconv(.C) void;

