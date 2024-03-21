import {Color} from '../classes/Color'
export namespace Shapes {
  export class Circle {
    color?: string | Color;
    radius: number;
    circumference?: number;
    diameter?: number;
  }
  // Sub Namespace: Polygons
  export namespace Polygons {
    export class Triangle {
      color?: string | Color;
      base: number;
      height: number;
      length_a: number;
      length_b: number;
      length_c: number;
      angle_a: number;
      angle_b: number;
      angle_c: number;
      type?: 'equilateral' | 'isosceles' | 'scalene' | undefined;
      angle_type?: 'acute' | 'right' | 'obtuse' | undefined;
    }
    export class Square {
      color?: string;
      sides: 4
      length: number;
      height: number;
    }
    export class Rectangle {
      color?: string | Color;
      length: number;
      height: number;
    } 
    export class Pentagon {
      color?: string | Color;
      sides: 5;
      length: string;
      height: string; 
    }   
    export class Hexagon {
      color?: string | Color;
      sides: 6;
      length: number;
      height: number;
    }
    export class Octagon {
      color?: string | Color;
      sides: 8;
      length: number;
      height: number;
     }
     export type Shape = Circle | Square | Rectangle | Triangle | Hexagon | Octagon | Pentagon;  
  }   
  
   } 