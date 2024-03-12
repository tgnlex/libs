use std::io;


fn get_name() {
	println("Please Enter your name")
	let mut name = String::new()
	io::stdin()
		.read_line(&mut name)
		.expect("Failed to read input")
	println!("Hello {name}!")
}


fn main() {
	get_name()
}