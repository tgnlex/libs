<?php
$xmlDoc = new DomDocument();
$xmlDoc->load("note.xml");

$x = $xmlDoc->documentElement;
foreach ($x->childNodes AS $item) {
    print $item->nodeName . " = " . $item-> nodeValue . "<br>";
}
?>