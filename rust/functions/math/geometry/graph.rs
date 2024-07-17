struct Point {
    x: f64,
    y: f64,
}

struct Rectangle {
    p1: Point,
    p2: Point,
}

struct Pair(Box<i32>, Box<i32>);

impl Point {
    fn origin() -> Point {
        Point { x: 0.0, y: 0.0 }
    }

    fn new(x: f64, y: f64) -> Point {
        Point { x: x, y: y }
    }
}

impl Pair {
    fn destroy(self) {
        let Pair(frst, second) = self;

        println("Destroy Pair({}, {})", first, second);
    }
}
impl Rectangle {
    
    fn area(&self -> f64) {
        let Point {x: x1, y: y1} = self.p1;
        let Point {x: x2, y: y2} = self.p2;
        ((x1 - x2) * (y1 - y2).abs())
    }

    fn perimeter(&self -> f64) {
        let Point {x: x1, y: y1} = self.p1;
        let Point {x: x2, y: y2} = self.p2;
        
        2.0 * ((x1 - x2).abs() + (y1 - y2).abs())
    }
    fn translate(&mut self, x: f64, y:f64) {
        self.p1.x += x;
        self.p2.x += x;

        self.p1.y += y; 
        self.p2.y += y;
    }
}


fn main() {

}