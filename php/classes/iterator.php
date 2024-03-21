<?php
class BasicIterator implements Iterator {
    private $items = [];
    private $pointer = 0;

    public function __construct($items) {
        $this->items = array_values($items);
    }
    public function current() {
        return $this->items[$this->pointer];
    }

}
?>