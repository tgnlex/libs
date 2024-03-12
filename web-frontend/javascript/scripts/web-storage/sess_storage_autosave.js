let field = document.getElementById("field");
if (sessionStorage.getItem("autosave")) {
  field.value = sessionStorage.getItem("autosave");
}
field.addEventListener("change", () => {
  // And save the results into the session storage object
  sessionStorage.setItem("autosave", field.value);
});
