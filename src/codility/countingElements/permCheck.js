function solution(A) {
    A.sort()
    if (A[0] !== 1) return 0
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i + 1] !== A[i] + 1) return 0
    }
    return 1
}

var A = [10, 0, 1, 5, 8, 9, 7, 2, 3, 4, 6]

var t = solution(A)
t
