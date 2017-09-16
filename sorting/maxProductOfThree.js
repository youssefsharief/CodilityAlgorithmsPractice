A = [-5, 5, -5, 4]

function solution(A) {
    A = A.sort((a, b) => a - b)
    return Math.max(A[A.length-1] * A[A.length-2] * A[A.length-3],  A[0] * A[1] * A[2],   A[0] * A[1] * A[A.length-1] )
}
var t = solution(A)
t

// function solution (A){

//     for (let i=0; i<A.length-2 ; i++ ) {
//         let product
//         if ( A[i+1] > A[i] ) {
//             product =  A[i+1] + A[i]

//         }

//     }

//     A.forEach((element) => {

//     });
// }
