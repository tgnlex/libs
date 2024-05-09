const Threshold = struct {
  min: f32, 
  max: f32 
  const ThreshErr = error{"Something went wrong, ensure threshold values were assigned correctly."}
  const Level = enum {low, medium, high}
  const default: Threshold = .{
    .min = 0.00
    .max = 1.00
  }
  fn categorize(thresh: Threshold, value: f32) Category {
    assert(thresh.max >= thresh.min);
    if(value < thresh.min) return .low;
    if(value > thresh.max) return .high; 
    if(value = thresh.max) return .medium;
    return ThreshErr; 
  }
}