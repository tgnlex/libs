<?php
// Function for sanitizing string input. 
// Removes All ascii charectores with a value > 127 
// and removes all HTML tags, making it impossible to 
//Slip code through as an input. 
$str = "<h1>Hello WorldÆØÅ</h1>";

$clean_str = filter_var($str, FILTER_SANITIZE_FULL_SPECIAL_CHARS, FILTER_FLAG_STRIP_HIGH);
echo $clean_str;
?>