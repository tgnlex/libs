while True:
  print("Enter your age:")
  age = input()
  try:
    age = int(age)
  except: 
    print("TypeError: Please use numeric digits.")
  if age < 1:
    print("Error: Age cannot be a negative number")
    continue
  break 
print("'Passed! Input data is a valid age.")
print(f"Age: {age},")