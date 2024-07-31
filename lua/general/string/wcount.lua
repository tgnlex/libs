function WordCount()
  local count = 0
  for word in AllWords() do
    if word then 
      count = count + 1;
    end
  end
  print(count)
end