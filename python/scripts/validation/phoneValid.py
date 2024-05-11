def phoneValidator(data):
  invalid = f"Failed! ==> {data} is not a phone number"
  valid = f"Passed! ==> {data} is a valid phone number."
  if len(data) > 12:
    print(invalid)
    print("Reason: too many digits present.")
    return False
  if len(data) < 12:
    print(invalid)
    print("Reason: too few digits present.")  
    return False
  for i in range(0, 3)
    if not data[i].isdecimal():
      print(invalid)
      print("Reason: Area code not composed of numbers")
      return False 
    if data[3] !=  '-':
      print(invalid)
      print("Reason: Fourth charector is not the proper delimeter.")
      print("Expected: '-'")
      print(f"Got: {data[3]}")
      return False 

    if data[7] != '-':
      print("Reason: Fourth charector is not the proper delimeter.")
      print("Expected: '-'")
      print(f"Got: {data[7]}")
      print(invalid)
      return False
  print(valid)