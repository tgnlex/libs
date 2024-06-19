fn Matrix(
    comptime T: type,
    comptime width: comptime_int,
    comptime height: comptime_int,
) type {
    return [height][width]T;
}
