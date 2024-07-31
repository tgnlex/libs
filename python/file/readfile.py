filename = input('What file would you like to read? \n')
file = open(filename, "r")
content = file.read()
print(content)


