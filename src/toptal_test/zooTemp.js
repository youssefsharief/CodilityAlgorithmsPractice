function solution(A){
    let count = 0
    let min = Infinity
    for (var i = 0; i < A.length; i++) {
        if (A[i] <min) {
            min = A[i]
            count = 1
        }
        else if (A[i]>A[i-1]) {
            count ++

        }
    }
    return count
}

let A = [1, 5, 4, 9, 8, 7, 12, 13, 14]
A = [12, 13, 14, 1, 5, 4, 9, 8, 7]
// A=[4,3,2,6,1]
let t = solution(A)
t