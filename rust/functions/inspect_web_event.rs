fn inspect(event: WebEvent) {
	match event {
		WevEvent::PageLoad => println!("Page Loaded")
		WebEvent::PageUnload => println("Page Unloaded")
		WebEvent::KeyPress(c) => println("User Keypress: '{}' ". c)
		WebEvent::Paste(s) => println("User Pasted: \"{}\"")
		WebEvent::Click {x, y} => {
			println!("User clicked at x: {} y: {}", x, Y)
		}
	}
}