def factorial(n):
    if n==0:
        return 1
    else:
        return n*factorial(n-1)

def main():
    x = int(input("enter a number to recieve it's factorial"))
    print(factorial(x))

if __name__ == '__main__':
    main()
