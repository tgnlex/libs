<?php

class User {
  protected $firstname;
  protected $lastname;
  protected $username;
  protected $email;
  protected $password;

  function __construct($first_name, $last_name, $username, $email, $password, $avatar) {
    $this->firstname = $firstname;
    $this->lastname = $lastname;
    $this->username = $username;
    $this->email = $email;
    $this->password = $password;
  }
  
  function get_firstname() {
    return $this->first_name;
  }
  function get_lastname() {
    return $this->last_name;
  }
  function get_username() {
    return $this->username;
  }
  function get_email() {
    return $this->email;
  }
  function get_password() {
    return $this->password;
  }
}
?>

<?php
// Example Instantiation of User Constructor
$testUser = new User(
    "a", 
    "test", 
    "user", 
    "atestuser@fake.com", 
    "password",);
?>

