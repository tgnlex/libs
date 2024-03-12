
interface Graph {
    title?: string,
    x_axis_title?: string,
    y_axis_title?: string,
    x_axis_length: number,
    y_axis_length: number,
    origin: point | [number, number];
    points?: point[] | [number, number][] | null;
    lines?: line[] | [point, point][] | null;

}
interface point {
    x: number,
    y: number
}
interface line { 
    start: point,
    end: point
}