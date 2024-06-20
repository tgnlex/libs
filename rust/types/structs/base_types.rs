struct Unit;

struct Item {
    id = i32;
}

struct Pair(Box<i32>, Box<i32>);

struct Result<T, io:Error>