
<!DOCTYPE html>
<html>
<body>
<!----- FILE UPLOAD FORM ----->
<form action="upload.php" method="post" enctype="multipart/form-data"s>
    <label>Select An Image:</label>
    <input 
      id="image_upload" 
      type="file" 
      name="image_upload"  
    />
    <input 
      id="submit_image" 
      type="submit" 
      name="submit_image" 
      value="Upload Image"  
    />
</form>
<!-------------------------->

<!----- PHP Form Logic ----->
<?php
// Assign Variables
$target_dir="uploads/";
$target_file = $target_dir . basename($_FILES["image_upload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check&Validate if image file is an actual image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["submit_image"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}

// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}

// Check file size 
if ($_FILES["image_upload"]["size"] > 500000) {
    echo "Sorry, your file is too large";
    $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "jpeg" && $imageFileType != "png" && $imageFileType != "gif") {
    echo "Image must be eithe a JPG, JPEG, PNG, & GIF";
    $uploadOk = 0;
}

// Error Handling 
if ($uploadOk == 0) {
    echo "Sorry, we were not able to upload your file.";
} else {
    if (move_uploaded_file($_FILES["image_upload"]["tmp_name"], $target_file)) {
        echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded. "; 
    } else {
        echo "Sorry, An error occured while uploading your file.";
    }
}
?>
<!-------------------------->
</body>
</html>
