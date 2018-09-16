


function solution(A) {
    if (A.length === 0) return 0
    if (A.length === 1) return A[0]
    let maxEnding = 0
    let maxSlice = 0

    for (var i = 0; i < A.length; i++) {
        maxEnding = Math.max(0, maxEnding + A[i])
        maxSlice = Math.max(maxSlice, maxEnding)
    }
    // In case all values are negative choose the largest number
    if (maxSlice === 0 && A[0] <0 ) {
        A.sort((a,b)=> a-b)
        maxSlice = A[A.length-1]
    }
    return maxSlice
}











var t = solution([-500, -1, -2])
t

var t = solution([-2, -2, 100, -80, 1000])
t

var t = solution([3, 2, -6, 4, 0])
t

var t = solution([-10])
t

var t = solution([-10, 5, 3])
t