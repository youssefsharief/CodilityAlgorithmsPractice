const {countFactors, factorialCoprime, oddFactorialEnhanced, evenFactorialEnhanced, factorialEnhanced, solution } = require('../nayuki')

const assert = require("chai").assert;

describe('factorial()', () => {
    describe('countFactors function', () => {
        it('should work', () => {
            assert.equal(countFactors(50, 5), 12);
            assert.equal(countFactors(100, 5), 24);
            assert.equal(countFactors(150, 5), 37);
            assert.equal(countFactors(250, 5), 62);
        })
    })

    describe('factorialCoprime function', () => {
        it('should work', () => {
            assert.equal(factorialCoprime(3), 3);
            assert.equal(factorialCoprime(4), 3);
            assert.equal(factorialCoprime(5), 3);
            assert.equal(factorialCoprime(6), 3);
            assert.equal(factorialCoprime(7), 21);
            assert.equal(factorialCoprime(10), 189);
            assert.equal(factorialCoprime(18), 459);
        })
    })

    describe('oddFactorialEnhanced function', () => {
        it('should work', () => {
            assert.equal(oddFactorialEnhanced(3), 3);
            assert.equal(oddFactorialEnhanced(4), 3);
            assert.equal(oddFactorialEnhanced(5), 3);
            assert.equal(oddFactorialEnhanced(6), 3);
            assert.equal(oddFactorialEnhanced(7), 21);
            assert.equal(oddFactorialEnhanced(10), 189);
            assert.equal(oddFactorialEnhanced(18), 377);
        })
    })
    describe('evenFactorialEnhanced function', () => {
        it('should work', () => {
            assert.equal(evenFactorialEnhanced(3), 1);
            assert.equal(evenFactorialEnhanced(4), 1);
            assert.equal(evenFactorialEnhanced(5), 1);
            assert.equal(evenFactorialEnhanced(6), 3);
            assert.equal(evenFactorialEnhanced(7), 3);
            assert.equal(evenFactorialEnhanced(10), 3);
            assert.equal(evenFactorialEnhanced(18), 567);
        })
    })

    describe('factorialEnhanced function', () => {
        it('should work', () => {
            assert.equal(factorialEnhanced(3), 3);
            assert.equal(factorialEnhanced(4), 3);
            assert.equal(factorialEnhanced(5), 3);
            assert.equal(factorialEnhanced(6), 9);
            // 21 * 3
            assert.equal(factorialEnhanced(7), 63);
            assert.equal(factorialEnhanced(10), 567);
            assert.equal(factorialEnhanced(18), 759);
        })
    })

    describe('solution function', () => {
        it('should work', () => {
            assert.equal(solution(3), 6);
            assert.equal(solution(4), 24);
            assert.equal(solution(100), 864);
            assert.equal(solution(200), 472);
            assert.equal(solution(300), 496);
            assert.equal(solution(10000000), 496);
        })
    })


});

