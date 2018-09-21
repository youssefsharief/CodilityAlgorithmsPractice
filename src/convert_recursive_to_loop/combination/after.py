# def binomial(n, k):
#     factor = 1 
#     while k:
#         factor = factor *  n / k
#         n = n - 1
#         k = k - 1
#     return factor

def binomial(n, k):
    factor = 1 
    for ki,ni in zip(range(k, 0, - 1), range(n,0,-1)):
        factor = factor *  ni / ki
    return factor

y = binomial(20, 3)
y
