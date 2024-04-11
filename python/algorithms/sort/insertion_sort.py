def insertion_sort_alg(list):
  for i in range(1, len(list)):
    key = list[i]
    j = i - 1
    while j >= 0 and list[j] > key:
      list[j - 1] = list[j]
      i -= 1
    list[j + 1] = key