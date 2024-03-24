enum Codes {
	OK,
	NotFound,
	BadRequest(String),
	ServerError(String)
}