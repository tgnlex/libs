<?php
$server = "localhost";
$username = "root"
$password = "admin"

// Start Connection 
$connect = new mysqli($server, $username, $password);

if ($connect->connect_error) {
  die("Connection failed: ". $connect->connect_error);
}
echo "Connection Successful"
?>