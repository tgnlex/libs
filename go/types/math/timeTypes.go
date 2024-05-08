type Date struct {
	Year  int
	Month int
	Day   int
}
type Time struct {
	hour   int
	minute int
	second int
}
type DateTime struct {
	Date
	Time
}
