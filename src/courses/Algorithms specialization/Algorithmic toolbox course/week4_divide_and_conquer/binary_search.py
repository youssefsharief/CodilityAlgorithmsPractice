# Uses python3
import sys
from random import randint


def linear_search(a, x):
    for i in range(len(a)):
        if a[i] == x:
            return i
    return -1

def binary_search(a, x):
    left, right = 0, len(a)
    idx = len(a) // 2
    while(True):
        if right == 0:
            return -1
        idx = (right + left) // 2
        if a[idx] == x:
            return idx
        elif a[idx] > x:
            right = idx
        elif right == left+1:
            return -1
        else:
            left = idx


def generate():
    while(True):
        x = randint(60, 100)
        a = [randint(0,59) for i in range(50)] + [randint(101, 150) for i in range(50)]
        a = a + [x]
        a.sort()
        naiveSolution = linear_search(a, x)
        fastSolution = binary_search(a, x)
        if  naiveSolution != fastSolution:
            print("Error", x, naiveSolution, fastSolution)
            print()
            print(fastSolution)
        # else:
            # print("Ok",)


if __name__ == '__main__':
    # generate()
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n = data[0]
    m = data[n + 1]
    a = data[1 : n + 1]
    for x in data[n + 2:]:
        answer = binary_search(a, x)
        print(answer)
