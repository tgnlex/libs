type unit struct {
	num int 
}

type value struct {
	unit 
	str string
}
type describable interface {
	describe() string
}

