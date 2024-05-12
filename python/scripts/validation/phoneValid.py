def phoneValidator(data=input("enter a phone number")):
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
  for i in range(0, 3):
    if not data[i].isdecimal():
      print(invalid)
      print("Reason: First set (area code) not composed of integers")
      return False 
    if data[3] !=  '-':
      print(invalid)
      print("Reason: Fourth charector is not the proper delimeter.")
      print("Expected: '-'")
      print(f"Got: {data[3]}")
      return False 
    for i in range(4, 7):
      if not data[i].isdecimal():
        print(invalid)
        print("Reason: Second set (prefix) not composed of integers.")
        return False
    if data[7] != '-':
      print(invalid)
      print("Reason: Eighth charector is not the proper delimeter.")
      print("Expected: '-'")
      print(f"Got: {data[7]}")
      return False
    for i in range(8, 12):
      if not data[i].isdecimal():
        print(invalid)
        print("Reason: Third set of numbers (suffix) is not composed of integers.")
        return False
  print(valid)
  return True

phoneValidator("518")