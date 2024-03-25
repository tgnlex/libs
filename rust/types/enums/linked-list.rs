use crate::List::*;
enum List {
	Cons(u32), Box<List>),  
	Nil, 
}

// Attatch methods to List Enum
impl List {
	// creates empty list
	fn new() -> List {
		Nil
	}
	// Consume list, than return it with a new element
	fn prpend(self, elem:u32) -> List {
		Const(elem, Box::new(self))
	}}

	fn len(&self) -> u32 {
		match *self {
			Cons(_, ref tail) => 1 + tail.len(), 
			Nil -> 0
		}
	}

	fn stringify(&self) -> String {
		match *self {
		  format!("{}, {}", head, tail.stringify())
		},
	  Nil => {
		format!("Nil")
	  }
 	}
  }
}