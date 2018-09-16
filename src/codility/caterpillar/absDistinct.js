function solution(A) {
    A = removeNegativeSign(A)
    A.sort((a, b) => a - b)
    let count = A.length
    for (var i = 0; i < A.length; i++) {
        if (A[i] === A[i + 1]) count--
        continue
    }
    return count
}

function removeNegativeSign(A) {
    return A.map(x => x < 0 ? -x : x)
}


var t = solution([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 44, 4, 4, 4, 44, 45, 45, -9, 9])
t
