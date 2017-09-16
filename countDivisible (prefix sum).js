function solutionBadPerf(a, b, k) {
    const isDivisible = num => num % k === 0
    let count = 0
    for (let i = a; i <= b; i++) {
        if (isDivisible(i)) count++
    }
    return count
}


var t = solutionBadPerf(6,12,2)
t



function solution(a, b, k) {
   return  Math.ceil(b/k - (a-1)/k)
}

var t = solution(6,12,2)
t
