# Uses python3
import sys
coins = [10,5,1]

def pickBest(due):
    if due == 0: 
        return []
    for c in coins:
        if c<= due: 
            return [c] + pickBest(due-c)



if __name__ == '__main__':
    m = int(input())
    print(len(pickBest(m)))
