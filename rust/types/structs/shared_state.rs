struct SharedState {
  completed: bool,
  waker: Option<Waker>
}