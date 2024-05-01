func reqHandler(w http.ResponseWriter, r *http.Request) {
	fmt.fprintf(w, "Current Path: %s", r.URL.PATH[1:])
}
