
// Turned out to be slow although the thrid loop looks exactly like the while loop in countTriangles3.js
function solution(A) {
    A.sort((a, b) => a - b)
    let count = 0
    for (var i = 0; i < A.length - 2; i++) {
        for (var j = i + 1; j < A.length; j++) {
            for (let k = i + 2; k < A.length; k++) {
                if (A[i] + A[j] <= A[k]) {
                    count += k - j - 1
                    break
                }
                else if (k === A.length - 1) count += k - j
            }
        }
    }
    return count
}
let arr = [10, 21, 22, 100, 101, 200, 300]
arr = [1, 2, 5, 8, 10, 12]
let r = solution(arr)
r

