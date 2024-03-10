<?php
// Get Content
$vote = $_REQUEST['vote'];
$filename = "sample_result.txt";
$content = file($filename);

// Move content to array
$array = explode("||", $content[0]);
$yes = $array[0];
$no = $array[1];

if ($vote == 0) {
    $yes = $yes + 1;
}
if ($vote == 1) {
    $no = $no + 1;
}

// Add votes to text file 
$inservote = $yes."||".$no;
$fp = fopen($filename, "w");
fputs($fp, $inservote);
fclose($fp);
?>
<html>
<body>
  <h2>Result:</h2>
  <table>
    <tr>
    <td>Yes:</td>
    <td>
      <img 
        src="#"
        width='<?php ?>'
        height='20'>
        <?php echo(100*round($yes/($no+$yes),2)); ?>%
      >
    </td>
    </tr>
    <tr>
        <td>No:</td>
        <td>
            <img 
              src="#"
              height='20'
              width='<?php echo(100*round($no/($no+$yes),2));?>'
            >
            <?php echo(100*round($no/($no+$yes),2)); ?>%
        </td>
    </tr>
  </table>
</body>
</html>

