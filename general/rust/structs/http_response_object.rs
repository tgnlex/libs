struct Response {
  body: String,
  code: Codes, 
}
enum Codes {
	OK,
	NotFound,
	BadRequest(String),
	ServerError(String)
}