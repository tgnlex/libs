<?php

$int = 12;
$min = 1;
$max = 20;

if (filter_var($int, FILTER_VALIDATE_INT, array("options" => array("min_range"=>$min, "max_range"=>$max))) === false) {
  echo("Sorry, but your integer does not meet our critera.");
} else {
  echo("This is an acceptable Integer.");
}