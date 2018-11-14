import sample_lib


def test_sanity():
    if (True != True):
        raise AssertionError('Sanity test failed')

def test_countFactors():
	assert sample_lib.countFactors(50, 5) ==12
	assert sample_lib.countFactors(100, 5) == 24
	assert sample_lib.countFactors(150, 5) == 37
	assert sample_lib.countFactors(250, 5) == 62

def test_factorialCoprime():
	assert sample_lib.factorialCoprime(3) == 3
	assert sample_lib.factorialCoprime(4) == 3
	assert sample_lib.factorialCoprime(5) == 3
	assert sample_lib.factorialCoprime(6) == 3
	assert sample_lib.factorialCoprime(7) == 21
	assert sample_lib.factorialCoprime(10) == 189
	assert sample_lib.factorialCoprime(18) == 459


def test_oddFactorialEnhanced():
	assert sample_lib.oddFactorialEnhanced(3) == 3
	assert sample_lib.oddFactorialEnhanced(4) == 3
	assert sample_lib.oddFactorialEnhanced(5) == 3
	assert sample_lib.oddFactorialEnhanced(6) == 3
	assert sample_lib.oddFactorialEnhanced(7) == 21
	assert sample_lib.oddFactorialEnhanced(10) == 189
	assert sample_lib.oddFactorialEnhanced(18) == 377


def test_evenFactorialEnhanced():
	assert sample_lib.evenFactorialEnhanced(3) == 1
	assert sample_lib.evenFactorialEnhanced(4) == 1
	assert sample_lib.evenFactorialEnhanced(5) == 1
	assert sample_lib.evenFactorialEnhanced(6) == 3
	assert sample_lib.evenFactorialEnhanced(7) == 3
	assert sample_lib.evenFactorialEnhanced(8) == 3
	assert sample_lib.evenFactorialEnhanced(10) == 3
	assert sample_lib.evenFactorialEnhanced(18) == 567

def test_factorialEnhanced():
	assert sample_lib.factorialEnhanced(3) == 3
	assert sample_lib.factorialEnhanced(4) == 3
	assert sample_lib.factorialEnhanced(5) == 3
	assert sample_lib.factorialEnhanced(6) == 9
	assert sample_lib.factorialEnhanced(7) == 63
	assert sample_lib.factorialEnhanced(10) == 567
	assert sample_lib.factorialEnhanced(18) == 759


def test_solution():
	assert sample_lib.solution(3) == 6
	assert sample_lib.solution(4) == 24
	assert sample_lib.solution(100) == 864
	assert sample_lib.solution(200) == 472
	assert sample_lib.solution(300) == 496
	assert sample_lib.solution(10000000) == 688
	assert sample_lib.solution(0) == 1
	 
