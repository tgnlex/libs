<?php
$email = "john.doe@example.com";

// Remove all illegal charectors from email.
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

// Validate e-mail
if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    echo("$email is a valid email address");
} else {
  echo("$email is not a valid email address");
}
?>