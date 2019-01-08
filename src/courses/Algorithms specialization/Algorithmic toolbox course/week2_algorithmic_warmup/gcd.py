# Uses python3
import math
from random import randint
import sys

def gcd_naive(a, b):
    current_gcd = 1
    for d in range(2, min(a, b) + 1):
        if a % d == 0 and b % d == 0:
            if d > current_gcd:
                current_gcd = d

    return current_gcd

def gcd_fast(x, y): 
   while(y): 
       x, y = y, x % y 
   return x 

def generate():
    while(True):
        num1 = randint(1,600)
        num2 = randint(1,600)
        naiveSolution = gcd_naive(num1, num2)
        fastSolution = gcd_fast(num1, num2)
        if  naiveSolution != fastSolution:
            print("Error")
            print(num1, num2)
            print(naiveSolution)
            print(fastSolution)
        # else:
            # print("Ok", num1, num2, fastSolution)
 
if __name__ == "__main__":
    input = sys.stdin.read()
    a, b = map(int, input.split())
    print(gcd_fast(a, b))

