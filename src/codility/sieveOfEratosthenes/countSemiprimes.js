function getPrimes(max) {
    let sieve = []
    let primes = []
    for (let i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (let j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}
function getSemiPrimesInRangeFromPrimes(primes, N) {
    const semiprimes = []
    for (let i = 0; i < primes.length; i++) {
        for (let j = i; j < primes.length; j++) {
            const multiple = primes[i] * primes[j]
            if (multiple <= N) semiprimes.push(multiple)
        }
    }
    return semiprimes.sort((a, b) => a - b)
}

function getRanges(semiprimes) {
    let mainArr = new Array(semiprimes[0]).fill(0)
    for (var i = 1; i < semiprimes.length; i++) {
        const arr = new Array(semiprimes[i] - semiprimes[i - 1]).fill(i)
        mainArr = mainArr.concat(arr)
    }
    return mainArr
}

function solution(N, P, Q) {
    const primes = getPrimes(N)
    const semiprimes = getSemiPrimesInRangeFromPrimes(primes, N)
    const ranges = getRanges(semiprimes)
    const results = []
    for (var i = 0; i < P.length; i++) {
        let t
        // special case 
        if (Q[i] === N) t = ranges[Q[i]-1]+1 - ranges[P[i]-1]
        else   t = ranges[Q[i]] - ranges[P[i]-1]
        results.push(t)
    }
    return results
}

let P = [1, 4, 16]
let Q = [26, 10, 20]
var r = solution(26, P, Q)
console.log(r)


// var t = ranges[10] - ranges[4 - 1]
// t
// var t = ranges[11] - ranges[4 - 1]
// t
// var t = ranges[12] - ranges[4 - 1]
// t
// var t = ranges[13] - ranges[4 - 1]
// t
// var t = ranges[14] - ranges[4 - 1]
// t
// var t = ranges[15] - ranges[4 - 1]
// t
// var t = ranges[15] - ranges[5 - 1]
// t
// var t = ranges[21] - ranges[5 - 1]
// t
// var t = ranges[22] - ranges[5 - 1]
// t
// var t = ranges[25] - ranges[5 - 1]
// t
// var t = ranges[25] + 1 - ranges[5 - 1]
// t
// var t = ranges[25] + 1 - ranges[4 - 1]
// t
