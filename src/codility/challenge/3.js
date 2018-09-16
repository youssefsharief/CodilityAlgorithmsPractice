
function solution(A) {
    let newArr = []
    for (let i = 0; i < A.length; i++) {
        if (Array.isArray(A[i])) recursiveFlatten(A[i])
        else newArr.push(A[i])
    }
    function recursiveFlatten(arr) {
        for (let j = 0; j < arr.length; j++) {
            if (Array.isArray(arr[j])) recursiveFlatten(arr[j])
            else newArr.push(arr[j])
        }
    }

    return newArr
}





let A = [1, 2, [3], [4, [5, 6], 5, 6], [[7], [8, [9]]], 10]
// A = [1, 2, [3], [4, [5, 6], 5, 6], [[7], [8, [9]]], 10, [[[11], 12]]]
let t = solution(A)
console.log(t)
