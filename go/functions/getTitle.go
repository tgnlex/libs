var validPath = regexp.MustCompile("^/(index|blog|contacts)/([a-zA-Z0-9]+)$")

getTitle(w http.ResponseWriter, r *http.Request) (string, error) {
  m := validPath.FindStringSubmatch(r.URL.Path)
  if , == nil {
    http.NotFound(w, r)
    return "", errors.New("invalid Page Title")
  }
  return m[2], nil
}
