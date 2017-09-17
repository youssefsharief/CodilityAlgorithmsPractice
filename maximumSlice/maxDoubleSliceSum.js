// function solution(A) {
//     let leftSums = [0];
//     let rightSums = [A.length-1];
//     for (let i = 0; i< A.length -3; i++) {
//         leftSums[i + 1] = Math.max(0, leftSums[i] + A[i + 1]);
//         rightSums[A.length - i - 4] = Math.max(0, rightSums[A.length - i - 4] + A[A.length - i - 3]);
//     }
//     rightSums
//     let maxSum = -Infinity;
//     for (let i = 0; i < A.length - 2; i++) {
//         maxSum = Math.max(maxSum, leftSums[i] + rightSums[i]);
//     }

//     return maxSum;
// }

// let t = solution([3,2,6,-1,4,5,-1,2])
// t
