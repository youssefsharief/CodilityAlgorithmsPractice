# Uses python3
import sys
from random import randint
from timeit import Timer

def lcm_naive(a, b):
    for l in range(1, a*b + 1):
        if l % a == 0 and l % b == 0:
            return l

    return a*b

def gcd_fast(x, y): 
   while(y): 
       x, y = y, x % y 
   return x 

def lcm_fast(x, y):
    return (x * y) // gcd_fast(x,y)


if __name__ == '__main__':
    input = sys.stdin.read()
    a, b = map(int, input.split())
    answer = lcm_fast(a, b)
    print(answer)
    # while(True):
    #     num1 = randint(1,600)
    #     num2 = randint(1,600)
    #     naiveSolution = lcm_naive(num1, num2)
    #     fastSolution = lcm_fast(num1, num2)
        # timeit.timeit(lcm_fast(167234687364874928, 75897439563764547892))
        # timeit.timeit(lcm_naive(167234687364874928, 75897439563764547892))
        # t = Timer(lambda: lcm_naive(18, 6))
        # t2 = Timer(lambda: lcm_fast(18, 6))
        # print('slow', t.timeit(number=100000))
        # print('fast', t2.timeit(number=100000))

        # if  naiveSolution != fastSolution:
        #     print("Error")
        #     print(num1, num2)
        #     print(naiveSolution)
        #     print(fastSolution)


