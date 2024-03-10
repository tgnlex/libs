interface Circle {
    kind: "circle";
    radius: number, 
}
interface Square { 
    kind: "square";
    length: number;
}
interface Rectangle {
    kind : "rectangle";
    length: number;
    width: number;
}
interface Triangle { 
    kind: "triangle";
    base: number;
    height: number;
}
type Shape = Circle | Square | Rectangle | Triangle;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
          return Math.PI * shape.radius ** 2;
        case "square":
            return shape.length ** 2;
        case "rectangle":
            return shape.length * shape.width;
        case "triangle":
            return 0.5 * shape.base * shape.height;
        default: 
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}