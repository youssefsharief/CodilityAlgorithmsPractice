
function solution(A) {
    let count = 1
    let B = A.slice()
    B.sort((a, b) => a - b)
    const min = B[0]
    let limit = 0
    if(A[0]!== min) return 1
    for (var i = 0; i < A.length; i++) {
        if (A[i] < A[i-1] && A[i]<limit) {
            count = 1
        }
        if (A[i] < min) {
            count = 1
        }
        else if (A[i] > A[i - 1]) {
            count++
            limit = A[i];
        }
    }
    return count
}

let A = [1, 5, 4, 9, 8, 7, 12, 13, 14]
// A = [12, 13, 14, 1, 5, 4, 9, 8, 7]
// A=[4,3,2,6,1]
A = [1, 5, 4, 9, 8, 7, 12, 13, 14,19,18]
A = [1, 5, 4, 9, 8, 7, 12, 13, 14,19,18,16,20]
A = [1, 5, 4, 9, 8, 7, 12, 13, 14,19,18,30]
A = [1, 5, 4, 9, 8, 7, 12, 13, 14,19,18,30,16]

let t = solution(A)
t