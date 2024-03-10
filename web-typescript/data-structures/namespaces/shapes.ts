export namespace Shapes {
        export interface Circle {
                color?: string;
                radius: number;
                center: Coordinates.Point | [number, number];
                circumference?: number;
                diameter?: number;
        }
        export namespace Polygons {
                export interface Triangle {
                        color?: string;
                        base: number;
                        height: number;
                        length_a: number;
                        length_b: number;
                        length_c: number;
                        angle_a: number | Coordinates.Angle;
                        angle_b: number | Coordinates.Angle;
                        angle_c: number | Coordinates.Angle;
                        type?: 'equilateral' | 'isosceles' | 'scalene' | undefined;
                        angle_type?: 'acute' | 'right' | 'obtuse' | undefined;
                 }
                export interface Square {
                        color?: string;
                        side: number;
                }
                export interface Rectangle {
                        color?: string;
                        width: number;
                        height: number;
                        }
                }   
        export namespace Coordinates {
                export interface Point {
                    id?: string | undefined;
                    x: number;
                    y: number;
                }
                export interface Line {
                    id?: string | undefined;
                    start: Point | [number, number]
                    end: Point | [number, number]
                }
                export interface Angle {
                    degree: number;
                    type: 'acute' | 'right' | 'obtuse';
                    vertext: Point | [number, number];
                    endpoint_a: Point | [number, number];
                    endpoint_b: Point | [number, number];
                }
            }
 
// Examples 
const my_triangle: Shapes.Polygons.Triangle = { 
    base: 3,
    height: 4,
    length_a: 5,
    length_b: 5,
    length_c: 5,
    angle_a: 60,
    angle_b: 60,
    angle_c: 60,
    type: 'equilateral',
    angle_type: 'acute'
}
const my_square: Shapes.Polygons.Square = {
    side: 5,
}
const my_rectangle: Shapes.Polygons.Rectangle = {
    width: 5,
    height: 10
}
const my_circle: Shapes.Circle = {
    radius: 5,
    center: [0, 0]
}
const my_point: Shapes.Coordinates.Point = {
    x: 0,
    y: 0,
}
const my_line: Shapes.Coordinates.Line = {
    start: [0, 0],
    end: [1, 1]
}
const my_angle: Shapes.Coordinates.Angle = {
    degree: 90,
    type: 'right',
    vertext: [0, 0],
    endpoint_a: [0, 1],
    endpoint_b: [1, 0]
}