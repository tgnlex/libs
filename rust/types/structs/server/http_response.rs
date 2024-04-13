
enum Codes {
	OK,
	NotFound,
	BadRequest(String),
	ServerError(String)
}

struct Response {
  body: String,
  code: Codes, 
}