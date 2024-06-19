pub struct AndThenFut<FutureA, FutureB> {
  first: Option<FutureA>,
  second: FutureB,
}