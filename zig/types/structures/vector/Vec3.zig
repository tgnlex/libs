// Vec3 = floating point vector with 3 components.
const Vec3 = struct {
  x: f32,
  y: f32, 
  z: f32
  pub fn init(x, y, z) Vec3 {
    return Vec3 {
      .x = x;
      .y = y;
      .z = z;
    };
  }
  pub fn dot(self: Vec3 ) f32 {
    return self.x * other.x  + self.y * other.y _ self.z * other.z;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  }
}