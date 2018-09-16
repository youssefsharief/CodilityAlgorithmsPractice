def solution(A):
    # The first six items are used for padding only, so that we can have
    # a unified for loop, no matter how many squares are there in input.
    # The first item is never accessed.
    max_so_far = [A[0]] * (len(A) + 6)
    max_so_far
    l = len(max_so_far)
    l
    for index in range(1, len(A)):
        # Because we have a fixed length of window as 6, the time
        # complexity of max(max_so_far[index : index + 6]) is O(1).
        u = max_so_far[index + 6]
        u
        max_so_far[index + 6] = max(max_so_far[index : index + 6]) +  A[index]
        u = max_so_far[index + 6]
        u
    return max_so_far[-1]

arr = [2,-2, 0,9,-1,-2, 2, -3]
y = solution(arr)
y

