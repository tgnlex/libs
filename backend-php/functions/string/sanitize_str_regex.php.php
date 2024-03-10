<?php
$url = "https://www.americanmuslim.blog";

if (!filter_var($url, FILTER_VALIDATE_URL, FILTER_FLAG_QUERY_REQUIRED) === false) {
    echo ("$url is a valid URL, and contains a query string.")
} else {
    echo("$url is not a valid URL, &SSSSSSor does not contain a query string.")
}

?>