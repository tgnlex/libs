for i 0 to N do 
  minValue = inf;
  minIndex = 0;
  for j 0 to N do 
    color = Unsorted[j]
    v = SortValue(color)

    if v < minValue then 
      minValue = v;
      minIndex = j;
    end
  end

  Sorted[i] = Unsorted[minIndex];
  Unsorted[minIndex] = inf;
end
