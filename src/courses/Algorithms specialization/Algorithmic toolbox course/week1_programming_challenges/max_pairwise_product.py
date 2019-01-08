# python3
import math
from random import randint

def max_pairwise_product(numbers):
    n = len(numbers)
    max_product = 0
    for first in range(n):
        for second in range(first + 1, n):
            max_product = max(max_product,
                              numbers[first] * numbers[second])

    return max_product

def max_pairwise_product_fast(numbers):
    max_product = 0
    max_number = 0
    second_max_number = 0
    min_number = 0
    second_min_number = 0
    
    for num in numbers:
        if (num > 0):
            if num > max_number:
                second_max_number = max_number
                max_number = num
            elif num > second_max_number:
                second_max_number = num
        elif num<0:
            if num<min_number:
                second_min_number = min_number
                min_number = num
            elif num<second_min_number:
                second_min_number = num
        
    max_product = max_number * second_max_number
    if min_number * second_min_number > max_product:
        max_product = min_number * second_min_number
    return max_product


if __name__ == '__main__':
    input_n = int(input())
    input_numbers = [int(x) for x in input().split()]
    print(max_pairwise_product_fast(input_numbers))
    # while(True):
    #     numbers = [randint(-100, 300) for n in range(10)]
    #     if max_pairwise_product(numbers) != max_pairwise_product_fast(numbers):
    #         print("Error")
    #         print(numbers)
    #         print(max_pairwise_product(numbers))
    #         print(max_pairwise_product_fast(numbers))
    #     else:
    #         print("Ok")

