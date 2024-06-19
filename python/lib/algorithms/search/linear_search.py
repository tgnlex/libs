def linear_search_alg(list, x):
  for i in range(len(list)):
    if list[i] == x:
      return i
  return -i