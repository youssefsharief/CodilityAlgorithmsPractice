

def fib(n):
    fibn1, fibn2 = (1, 0)
    for _ in range(n):
        fibn1, fibn2 = fibn1 + fibn2, fibn1
    return fibn2

y = fib(22)
y
