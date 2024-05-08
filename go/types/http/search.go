type Search struct {
	Query      string
	NextPage   int
	TotalPages int
	Results    *news.Results
}