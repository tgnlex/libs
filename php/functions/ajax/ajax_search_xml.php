<?php
$xmlDoc = new DOMDOCUMENT();
$xmlDoc->load('sample_links.xml')

$links=$xmlDoc->getElementByTagName('link')

// get the q parameter from URL
$q=$_GET["q"];

// Lookup all links from xml file if len(q) > 0
if (strlen($q)>0) {
    $hint="";
    for($i=0; $i<($x->length); $i++) {
        $y=$x->item($i)->getElementsByTagName('title');
        $z=$x->item($i)->getElementsByTagName('url');
        if ($y->item(0)->nodeType==1) {
            // Find link matching the search text
            if (stristr($y->item(0)->childNodes->item(0)->nodeValue,$q)) {
                if ($hint=="") {
                    $hint="<a href='" . 
                    $z->item(0)->childNodes->item(0)->nodeValue .
                    "' target='_blank'>" .
                    $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
                } else {
                    $hint=$hint . "<br /><a href='" .
                    $z -> item(0)->childNodes->item(0)->nodeValue . "'target='_blank'>"
                    $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
                }
            }
        }
    }
}
if ($hint=="" ) {
    $response="no suggestion";
} else {
    $response=$hint;
}

echo $response;
?>