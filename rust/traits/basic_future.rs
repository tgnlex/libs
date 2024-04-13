trait BasicFuture {
  type Output;
  fn poll(&mut self, wake: fn()) -> Poll<self::Output>;
}