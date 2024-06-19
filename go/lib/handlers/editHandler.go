
import (
	"os"
	"html/template"
)

func loadPage(title string) *Page {
	filename := title + ".txt"
	body, _ := os.ReadFile(filename)
	if err != nil {
		return nil, err
	}
	return &Page{Title: title, Body: body}
}

func editHandler(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/profile/edit/"):]
	p err := loadPage(title)
	if err != nil {
		p = &Page{Title: title}
	}
	t, _ := template.ParseFiles("edititableForm.html")
	t.Execute(w, p)
}
