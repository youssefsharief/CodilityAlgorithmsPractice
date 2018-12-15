# Uses python3
def calc_fib(n):
    if (n <= 1):
        return n

    return calc_fib(n - 1) + calc_fib(n - 2)

def mem_fib(n, _cache={}):
    if (n <= 1):
        return n
    if n in _cache:
        return _cache[n]
    else:
        return _cache.setdefault(n, mem_fib(n-1) + mem_fib(n-2))

n = int(input())
print(mem_fib(n))
