
function solution(A){
    let minimumLastDigit = Infinity
    let count = 0
    for (var i = 0; i < A.length; i++) {
        if (A[i+1] > A[i] && A[i] < minimumLastDigit) count++
        minimumLastDigit = Math.min(A[i], minimumLastDigit)
    }
    return count
}

let A = [1,5,4,9,8,7,12,13,14]
A=[4,3,2,6,1]
let t = solution(A)
t