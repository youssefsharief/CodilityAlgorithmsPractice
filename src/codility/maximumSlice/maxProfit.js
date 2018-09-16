function solution (A) {
    let min = A[0]
    let maxDiff = 0
    A.forEach(price=>{
        if (price < min ) min = price
        else {
            const diff = price - min
            maxDiff = Math.max(maxDiff, diff)
        }
    })
    return maxDiff
}

let A = [23171, 21011, 21123, 21366, 21013, 21367]
var c = solution(A)
c


A = [23171, 2000]
var c = solution(A)
c


A = [10, 3E3, 3E4 , 20, 4E4]
var c = solution(A)
c


A = [10, 100, 0, 70]
var c = solution(A)
c

A = [10, 100, 0, 70, 2000]
var c = solution(A)
c