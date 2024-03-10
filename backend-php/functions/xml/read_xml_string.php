<?php
$my_xml_str = 
"<?xml version='1.0' encoding='UTF-8'?>
<note> 
<to>Amore</to>
<from>Yours Truly</from>
<body>Can't wait to see you after work tonight!</body>
</note>";

$xml=simplexml_load_string($my_xml_str) or die("Error: Cannot create object");
print_r($xml);
?>