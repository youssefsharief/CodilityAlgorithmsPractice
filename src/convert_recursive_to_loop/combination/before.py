def binomial(n, k):
    if k == 0:
        return 1
    return n * binomial(n - 1, k - 1) // k

y = binomial(20, 3)
y
