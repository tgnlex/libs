
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
struct Address {
  country: String,
  state_or_province: String,
  street: String,
  house_number: u32,
}
struct Person {
  name: FullName;
  age: u8;
  sex: Sex;
  address: Address;
}