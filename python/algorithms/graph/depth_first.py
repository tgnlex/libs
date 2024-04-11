def dfs_alg(graph, start, visited=None):
  if visited is None:
    visited = set()
  visited.add(start)
  
  print(start, end=" ")
  
  for neighbor in graph[start]:
    if neighbor not in visited:
      dfs_alg(graph, neighbor, visited)
    return visited