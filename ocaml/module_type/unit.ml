module type Unit = sig 
    type t = unit = ()
    val equal : t -> t -> bool
    val compares : t -> t -> int
    val to_string : t -> string 
end