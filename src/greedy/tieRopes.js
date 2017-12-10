function solution(K, A) {
    let counter = 0
    let currentRope = 0
    for (let i = 0; i < A.length; i++) {
        if (A[i] < K) {
            currentRope = currentRope + A[i]
            if (currentRope >= K) {
                counter++
                currentRope = 0
            }
        }
        if (A[i] >= K) {
            counter++
            currentRope = 0
        }
    }
    return counter
}
let K = 4
let A = [1, 2, 3, 4, 1, 1, 3]
A = [4,4,4,4,4,1,2,1,3,1]
let y = solution(K, A)
y