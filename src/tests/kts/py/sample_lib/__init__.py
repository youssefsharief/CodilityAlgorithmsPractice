def solution(n):
	twos = countFactors(n, 2) - countFactors(n, 5)  
	if twos >= 25:
		twos = (twos - 5) % 2500 + 5
	return factorialEnhanced(n) * pow(2, twos, 1000) % 1000

def factorialEnhanced(n):
	return evenFactorialEnhanced(n) * oddFactorialEnhanced(n) % 1000

def evenFactorialEnhanced(n):
	if n == 0:
		return 1
	else:
		return factorialEnhanced(n // 2)


def oddFactorialEnhanced(n):
	if n == 0:
		return 1
	else:
		return oddFactorialEnhanced(n // 5) * factorialCoprime(n) % 1000


def factorialCoprime(n):
	n %= 1000
	product = 1
	for i in range(1, n + 1):
		if not isDivisible(i,2) and not isDivisible(i,5):
			product = i * product % 1000
	return product


def countFactors(end, n):
	if end == 0:
		return 0
	else:
		return end // n + countFactors(end // n, n)

def isDivisible(num1, num2):
	return num1 % num2 == 0


# import sys
# for i in sys.stdin:
#     print(solution(int(i)))
