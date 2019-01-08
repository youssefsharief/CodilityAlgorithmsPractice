from heapq import heappush, heappop
heap = []
data = [10, 1, 3, 5, 7, 9, 2, 4, 6, 8, 0]
for item in data:
    heappush(heap, (item, 'a'))
while heap:
    print(heappop(heap))
