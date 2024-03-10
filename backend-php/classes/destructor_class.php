<?php class Account {
    public $name;
    public $balance;

    function __construct($name, $balance) {
        $this->name = $name;
        $this->balance = $balance; 
    }
    function __destruct() {
        echo "Account Name: {$this->name}"
        echo "<br/>"
        echo "<br/>"
        echo "Account Balance: ", "$", $this->balance, "USD";
    }
}

?>

<?php
$exander = new Account(
    "Exander",
    "1000000"
)
?>