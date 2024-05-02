module type HeapType = sig 
  type elt
  type t 
  val empty : t
  val is_empty : t -> bool 
  val insert : t -> elt -> t
  val merge : t -> t -> t 
  val find : t -> elt 
  val delete : t -> t 
end