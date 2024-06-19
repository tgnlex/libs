pub struct JoinFutures<FutureA, FutureB> {
  a: Option<FutureA>,
  b: Option<FutureB>
}