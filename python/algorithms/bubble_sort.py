def bubble_sort_alg(list):
  x = len(list)
  for i in range(x-1):
    swapped = False 
    for j in range(x-i-1):
      if list[j] > list[j+1] :
        list[j], list[j+1] = list[j+1], list[j]
        swapped = True
    if not swapped: 
      break