def merge_sort(list):
  if len(list) > 1:
    mid = len(list)
    left = list[:mid]
    right = list[mid:]
    merge_sort(left)
    merge_sort(right)
    merge(list, left, right)
    
def merge(list, left, right):
  i = j = k = 0
  
  # Merging temporary arrays
  while i < len(left) and j < len(right):
    if left[i] < right[j]:
      list[k] = left[i]
      i += 1
    else:
      list[k] = right[j]
      j += 1 
    k += 1
  # Copy any remaining elements from left array
  while i < len(left):
    list[k] = left[i]
    i += 1
    k += 1
  # Copy any remaining elements of right array
  while j < len(right):
    list[k] = right[j]
    j += 1
    k += 1