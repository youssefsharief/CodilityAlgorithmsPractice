function solution(A) {
    A.sort((a, b) => a - b)
    let count = 0
    for (var i = 0; i < A.length - 2; i++) {
        let k = i + 2
        for (var j = i + 1; j < A.length; j++) {
            while (k < A.length && (A[i] + A[j] > A[k]))  k++
            count += k - j - 1
        }
    }
    return count
}
let arr = [10, 21, 22, 100, 101, 200, 300]
let r = solution(arr)
r


