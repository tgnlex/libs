<html>
<body>



Name: <input type="text" name="name" value="<?php echo $name;?>">

E-mail: <input type="text" name="email" value="<?php echo $email;?>">

Website: <input type="text" name="website" value="<?php echo $website;?>">

Comment: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>

Gender:
<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="female") echo "checked";?>
value="female">Female
<input type="radio" name="gender"
<?php if (isset($gender) && $gender=="male") echo "checked";?>
value="male">Male

<?php 
$name = "";
$email = "";
$gender = "";
$comment = "";
$website = "";

$name_err = "";
$email_err = ""; 
$gender_err = "";
$website_err = "";

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!empty($_POST["name"])) {
        $name = test_input($POST["name"]);
        // Ensure name contains only letters and whitespace
        if (!preg_match("/^[a-zA-Z' ]*$/",$name)) {
            $name_err = "only letter and white space allowed.";
        }
    } else {
      $name_err = "Please enter your name.";
    }
    
    if (!empty($_POST["email"])) {
        $email = test_input($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email, please use the correct email format.";
        }
    } else {
        $email_err = "Please enter your email.";
    }

    if(!empty($_POST["website"])) {
        $website = test_input($_POST["website"]);
        // validate URL Address syntax
        if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i", $website)) {
            $website_err = "Invalid URL syntax, please enter a valid URL";
        } 
    } else {
        $website = "";
    }

    if (!empty($_POST["comment"])) {
        $comment = test_input($_POST["comment"]);
    } else {
        $comment = "";
    }

    if (!empty($_POST["gender"])) {
        $gender = test_input($_POST["gender"]);
    } else {
        $gender_err = "Please Select your Gender.";
    }
}


?>

</body>
</html>


