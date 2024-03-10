<?php 
// init xml expat parser
$parser=xml_parser_create();

// Function for Start of Element
function start($parser, $element_name, $element_attrs) {
    switch($element_name) {
        case "NOTE":
        echo "-- Note --<br>";
        break;
        case "TO":
        echo "To: ";
        break;
        case "FROM":
        echo "From: ";
        break;
        case "HEADING":
        echo "Heading: ";
        break;
        case "BODY":
        echo "Message: ";
    }
}

// Function for end of element
function stop($parser, $element_name) {
    echo "<br>";
}

// Function for finding char data
function char($parser,$data) {
    echo $data;
}

// Element handler
xml_set_element_handler($parser, "start", "stop");

// Data Handler
xml_set_charector_data_handler($parser,"char");

// Open File
$fp=fopen("note.xml", "r");

// Extract data from file
while ($data=fread($fp,4096)) {
    xml_parse($parser,$data,feof($fp))  or
    die (sprintf("XML ERROR: %s at line %d", 
    xml_error_string(xml_get_error_code($parser))
    xml_get_current_line_number($parser)));
}
// Turn off the parser.
xml_parser_free($parser);
?>