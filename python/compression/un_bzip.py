import bz2
from sys import stdin

filename = input("Enter the path/name of the file you would like to compress. \n")

try:
  with bz2.open(filename, "wb") as f:
    f.write()    
except: 
  print("Error: Please enter the name of a valid file.")
  print("If the file exists in a diffrent folder,")
  print("than the path must also be specified.")
  