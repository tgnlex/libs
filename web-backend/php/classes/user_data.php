<?php

class User {
  protected $first_name;
  protected $last_name;
  protected $username;
  protected $email;
  protected $password;
  protected $avatar;

  function __construct($first_name, $last_name, $username, $email, $password, $avatar) {
    $this->first_name = $first_name;
    $this->last_name = $last_name;
    $this->username = $username;
    $this->email = $email;
    $this->password = $password;
    $this->avatar = $avatar;
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
  function get_avatar() {
    return $this->avatar;
  }
}
?>

<?php
// Example Instantiation of User Constructor
$jason = new User(
    "Jason", 
    "G", 
    "main", 
    "jasongman@gmail.com", 
    "baldowner", 
    "jason.jpg");
?>

<?php
// Echo example class to document in order
// to verify everything works as intended.
echo "<br>";
echo "First Name: ", $jason->get_firstname();
echo "<br>";
echo "<br>";
echo "Lastname: ", $jason->get_lastname();
echo "<br>";
echo "<br>";
echo "Username: ", $jason->get_username();
echo "<br>";
echo "<br>";
echo "Email: ", $jason->get_email();
echo "<br>";
echo "<br>";
echo "Password: ", $jason->get_password();
echo "<br>";
echo "<br>";
echo "Avatar: ", $jason->get_avatar();
?>
