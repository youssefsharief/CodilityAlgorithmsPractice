# Uses python3
import sys
import random


def two(arr):
    if len(arr) <=1:
        return arr
    left = []
    right = []
    pivot = arr[0]
    for i in range(1, len(arr)):
        if arr[i] < pivot:
            left.append(arr[i])
        else:
            right.append(arr[i])
    return two(left) + [pivot] + two(right)

def three(arr):
    if len(arr) <=1:
        return arr
    left = []
    right = []
    equal = []
    pivot = arr[0]
    for i in range(1, len(arr)):
        if arr[i] == pivot:
            equal.append(arr[i])
        elif arr[i] < pivot:
            left.append(arr[i])
        else:
            right.append(arr[i])
    return three(left) + [pivot]+equal + three(right)

if __name__ == '__main__':
    input = sys.stdin.read()
    n, *a = list(map(int, input.split()))
    a = three(a)
    for x in a:
        print(x, end=' ')
