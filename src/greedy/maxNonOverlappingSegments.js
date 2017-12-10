
function solution (A, B) {
    if(A.length<=1) return A.length
    let counter = 1
    let tail = B[0]
    for (var i = 1; i < A.length; i++) {
        if (A[i] > tail) {
            counter++
            tail = B[i]
        }
   }
   return counter
}

let A = [1,3,7,9,9]
let B = [5,6,8,9,10]
 A = [1,3,5,7,9]
 B = [2,4,6,8,10]
let y = solution(A,B)
y
