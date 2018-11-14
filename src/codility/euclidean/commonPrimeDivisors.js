


function solution(A, B) {
    let count = 0
    for (var i = 0; i < B.length; i++) {
        const gcdRes = gcd(A[i], B[i])
        const bigger = Math.max(A[i], B[i])
        const smaller = Math.min(A[i], B[i])
        if (smaller === bigger) count++
        else if ( bigger/ smaller === smaller) count++
        else if (gcdRes === smaller && smaller !==1 ) {
            // check if there is a prime number included in the bigger number which is not included in the common primes
            gcdRes
            const commonPrimeDivisors = getPrimeDivisors(gcdRes)
            const num1 = bigger / gcdRes
            const num2 = smaller / gcdRes
        
            if (commonPrimeDivisors.indexOf(num1) !== -1 || commonPrimeDivisors.indexOf(num2) !== -1) count++
        }
    }
    return count
}


function getPrimeDivisors(num) {
    var sieve = [], i, j, primeDivisors = [];
    for (i = 2; i <= num; ++i) {
        if (!sieve[i] && num%i===0) {
            /* 
            Grab all divisible numbers starting from 2 from smallest to greatest and mark all multiples.
            For example, for 2, mark 2,4,6,8,etc. This way we are sure that when the loop goes to 4, it is already marked. This
            way we ensure that 4 is not pushed to the primeDivisors array 
            */
            primeDivisors.push(i);
            for (j = i << 1; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }
    primeDivisors
    return primeDivisors;
}



function gcd(a, b) {
    if (a === b) return a
    const bigger = Math.max(a, b)
    const smaller = Math.min(a, b)
    if (bigger % smaller === 0) return smaller
    else return gcd(smaller, bigger % smaller)
}

let A = [1,75,10]
let B = [1,15,30]
// let A = [10]
// let B = [30]
A = [551]
B=  [303601]

let r = solution(A, B)
r
