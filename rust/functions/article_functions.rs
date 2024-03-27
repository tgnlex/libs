pub trait Summary {
	fn summarize(&self) -> String;
}

pub struct Article { 
    pub headline: String, 
    pub location: String, 
    pub author: String, 
    pub content: String,
}

impl Summary for Article { 
	fn summarize(&self) -> String {
		format!("{}, by {} ({})", self.headline, self.author, self.location)
	}
}
