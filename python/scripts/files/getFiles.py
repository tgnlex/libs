import os

files = []

for file in os.listdir():
    if os.path.isfile(file):
        files.append(file)
        continue

print(files)
