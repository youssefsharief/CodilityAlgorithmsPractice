


function solution(A) {
    
    // O(N) time complexity (tested)
    const largeNumber = parseInt(A.reverse().join('')) * 17
    // O(N) time complexity (tested)
    const sum = [...largeNumber.toString()].map(digit => parseInt(digit)).reduce((cum, x) => cum + x)
    return sum
}
let A = Array(99999).fill(5)
let t = solution(A)
t