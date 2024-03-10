import random
import string 

len = 18

components = [string.ascii_letters]

chars = []
for clist in components:
    for item in clist:
        chars.append(item)

def gen_pass():
    password = []
    for i in range(len):
        rnd = random.choice(chars)
        password.append(rnd)
    return "".join(password)
print(gen_pass())
        