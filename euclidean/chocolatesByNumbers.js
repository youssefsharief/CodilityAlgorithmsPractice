
function solution (N, M){
    if (N % M ===0) return N/M
    else return N / (gcd(N,M))
}

function gcd(a, b) {
    if (a === b) return a
    const bigger = Math.max(a, b)
    const smaller = Math.min(a, b)
    if (bigger % smaller ===0)   return smaller
    else return gcd(smaller, bigger % smaller)
}

var t = solution (10, 4)
t

var t = solution (12, 21)
t
 