 


func renderTemplate(w http.ResponseWriter, tmpl string, p *Page) {
	t, _:= template.ParseFiles(tmpl, ".html")
	t.Execute(w, p)
}