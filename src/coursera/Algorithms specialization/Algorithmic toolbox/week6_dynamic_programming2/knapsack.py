# Uses python3
import sys
import math 


def solution(maxWeight, options): 
    arr = initial2DArray(len(options)+1, maxWeight+1)
    for i in range(1, len(arr)):
        weightOfItem = options[i-1]
        for weightCapacityOfBag in range(1,len(arr[0])):
            weightAsBefore = arr[i-1][weightCapacityOfBag]
            if (weightCapacityOfBag-weightOfItem)<0:
                arr[i].append(weightAsBefore)
            else:
                arr[i].append( max(weightAsBefore, arr[i-1][weightCapacityOfBag-weightOfItem] + weightOfItem)  )
    return getLastItemIn2DArray(arr)



def initial2DArray(numberOfRows, numberOfColumns):
    arr = [[0] if i!=0 else [0 for j in range(numberOfColumns)] for i in range(numberOfRows)]
    return arr


def getLastItemIn2DArray(arr):
    lastRow = arr[-1]
    lastItemInLastRow = lastRow[-1]
    return lastItemInLastRow


if __name__ == '__main__':
    input = sys.stdin.read()
    W, n, *w = list(map(int, input.split()))
    print(solution(W, w))
