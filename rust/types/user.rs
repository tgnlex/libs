enum Sex = {
  Male: 0,
  Female: 1,
  Intersex: 2
}
enum AccountType = {
  Banned: "banned",
  Basic: "basic",
  Member: "member",
  Moderator: "mod",
  Admin: "admin"
}
struct Avatar = {
  avatar_id: u32,
  avatar_url: String
}
struct Name = {
  first_name: String;
  last_name: String;
}
struct User ={ 
  id: u32,
  name: Name,
  age: String,
  sex: Sex,
  country: String;
  username: String,
  password: String, 
  email: String,
  avatar: Avatar,
  account_type: AccountType,
}