import (
	"net/http"
)

type Client struct {
	http     *http.Client
	key      string
	PageSize int
}
