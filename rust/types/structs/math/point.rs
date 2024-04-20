struct Point {
  x: f32,
  y: f32;
}

impl Point {
  fn origin () -> Point {
    Point {x: 0.0, y: 0.0}
  }

  fn new(x: f64, y: f64) -> Point {
    Point { x: x, y: y}
  }
}