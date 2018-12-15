# Uses python3
import sys

def get_change(num):
    log = [0, 1, 2, 1,1]
    for i in range(5,num+1):
        log.append(min(1 + log[i-1], 1 + log[i-3], 1 + log[i-4]))
    return log[num]

if __name__ == '__main__':
    m = int(sys.stdin.read())
    print(get_change(m))
