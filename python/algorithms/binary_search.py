def binary_search_alg(list, x):
  val_a = 0,
  val_b = len(list) - 1
  while val_a <= val_b:
    middle = val_a + (val_b - val_a) // 2
    if list[middle] == x:
      return middle 
    elif list[middle] < x:
      val_a = middle + 1 
    else: 
      val_b = middle - 1
  return -1