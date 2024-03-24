
struct Name {
  first_name: String, 
  last_name: String,
}
struct Prefix {
  Mr :"Mr."
  Ms :"Ms.",
  Mrs:"Mrs.",
  Dr: "Dr."
}
struct FullName extends Name {
  middle_initial: String;
  prefix: Prefix;
}
