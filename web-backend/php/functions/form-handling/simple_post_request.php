<html>
<body>

<form
  id="form-name"
  class="input-form" 
  method="post" 
  action="<?php echo $_SERVER['PHP_SELF'];?>">
  // Action attribute specifies where input data will be sent.
  // $_SERVER['PHP_SELF'] returns the current php file.
</form>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Use $_REQUEST GLOBAL to collect form data.
    $name = $_REQUEST['fname'];
    if (!empty($name)) {
        echo $name;
    } else {
        echo "Name is empty";
    }
}
?>

</body>
</html>