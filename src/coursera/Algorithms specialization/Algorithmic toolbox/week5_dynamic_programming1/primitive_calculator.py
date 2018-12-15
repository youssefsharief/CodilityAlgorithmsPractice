# Uses python3
import sys
import math 

def optimal_sequence(n):
    sequence = []
    while n >= 1:
        sequence.append(n)
        if n % 3 == 0:
            n = n // 3
        elif n % 2 == 0:
            n = n // 2
        else:
            n = n - 1
    return reversed(sequence)

def solution(num): 
    log = [Point(None,0), Point(None, 0), Point(1, 1), Point(1, 1), Point(2, 2),Point(4, 3), Point(3, 2)]
    for i in range(7, num+1):
        numberOfTransformations = math.inf
        basis = None
        
        if (i%3 == 0): 
            comp = 1 + log[i // 3].numberOfTransformations
            if(comp < numberOfTransformations):
                numberOfTransformations = comp
                basis = i // 3
        if (i%2 == 0): 
            comp = 1 + log[i // 2].numberOfTransformations
            if(comp < numberOfTransformations):
                numberOfTransformations = comp
                basis = i // 2

        comp = 1 + log[i-1].numberOfTransformations
        if (comp < numberOfTransformations):
            numberOfTransformations = comp
            basis = i-1
        
        log.append(Point(basis, numberOfTransformations))
    

    backTrackLog = backTrack(log[0:num+1])
    return backTrackLog



def backTrack(log):
    backTrackArr = [len(log)-1]
    currentPoint = log[len(log) - 1]
    while (True):
        if(currentPoint.basis == None):
            return reversed(backTrackArr)
        backTrackArr.append(currentPoint.basis)
        currentPoint = log[currentPoint.basis]
    



class Point:
    def __init__(self, basis, numberOfTransformations):
        self.basis = basis
        self.numberOfTransformations = numberOfTransformations


input = sys.stdin.read()
n = int(input)
sequence = list(solution(n))
print(len(sequence) - 1)
for x in sequence:
    print(x, end=' ')
