<?php
libxml_use_internal_errors(true);
$xml_string = 
"<?xml version='1.0' encoding='UTF-8'?>
<document>
<user>peace</wronguser>
<email>peace@americanmuslim.blog</wrongemail>
</document>";

$xml - simplexml_load_string($xml_string);
if($xml === false) {
    echp "Failed Loading XML: ";
    foreach(libxml_get_errors() as $error {
        echo "<br>", $error->message;
    }
} else { 
    print_r($xml);
}
?>