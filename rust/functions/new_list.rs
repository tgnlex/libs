use crate::List::*;
enum List {
	Cons(u32, Box<List>),
}

impl List {
	fn new() -> List {
		Nil
	}
}