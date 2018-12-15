#Uses python3
import math
from random import randint
import sys

def get_fibonacci_last_digit_naive(n):
    if n <= 1:
        return n

    previous = 0
    current  = 1

    for _ in range(n - 1):
        previous, current = current, previous + current

    return current % 10


def fib_last_digit_fast(n, _cache={}):
    if (n <= 1):
        return n
    if n in _cache:
        return _cache[n]
    else:
        return _cache.setdefault(n, (fib_last_digit_fast(n-1) + fib_last_digit_fast(n-2))%10  )


if __name__ == '__main__':
    input = sys.stdin.read()
    n = int(input)
    answer = fib_last_digit_fast(n)
    print(answer)
    # while(True):
    #     num = randint(0,60)
    #     naiveSolution = get_fibonacci_last_digit_naive(num)
    #     fastSolution = fib_last_digit_fast(num)
    #     if  naiveSolution != fastSolution:
    #         print("Error")
    #         print(num)
    #         print(naiveSolution)
    #         print(fastSolution)
    #     else:
    #         print("Ok", num, fastSolution)

