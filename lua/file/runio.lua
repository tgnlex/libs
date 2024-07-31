function RunIO()
  print("Enter the path to a script file: \n")
  local filename = io.read()
   print("attempting to run script..")
  dofile(filename)
end