
# def factorial(n):
#     factor = 1
#     while (n>1):
#         (n,factor) = (n - 1, factor * n)
#     return factor



def factorial(n):
    factor = 1
    for i in range(n, 1, -1):
        factor = factor * i
    return factor



y= factorial(3)
y


# Could we use a for loop here ?