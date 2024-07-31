import bz2




def gen_data(chunks=10, chunksize=1000):
    """Yield incremental blocks of chunksize bytes."""
    for _ in range(chunks):
        yield b"z" * chunksize

bzip = bz2.BZ2Compressor()
out = b""
def inc_zip(i=0):
    for chunk in gen_data():       
        print(f"compressing... chunks compressed: {i}")
        out = out + bzip.compress(chunk)
        i = i + 1
    print(f"Cmpresed {i} total chunk(s).")
    return out
print("Preparing to flush binary.")
compressed = out + bzip.flush()
print("Compressed object:")
print(compressed, "\n\n")
name = input("What do you want to name your compressed file?")
print(f"{name}")

with bz2.open("compressed.bz2", "wb") as f:
    f.write(compressed)
    print("Compressed file written successfully.")
