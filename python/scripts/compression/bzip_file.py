import bz2

data = b"""\
This is a test. ."""
filename = "compressed.bz2"
with bz2.open(filename, "wb") as f:
  compressed_file = f.write(data)
with bz2.open(filename, "rb") as f:
  content = f.read()
if content == data: 
  print(f"File {filename} successfully compressed")
  