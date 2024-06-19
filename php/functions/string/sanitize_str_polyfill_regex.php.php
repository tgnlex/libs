<?php
$string = "<p>@im^A#bad~string</P";
function filter_string_polyfill(string $string): string
{
    $str = preg_replace('/\x00|<[^>]*>?/','', $string);
    return str_replace(["'", '"'], ['&#39;', '&#34;'], $str);
}
?>