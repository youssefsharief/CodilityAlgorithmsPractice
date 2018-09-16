function solution(A) {
    // sort and remove negetive numbers
    const arr = A.sort((a, b) => a - b).filter(x => x >= 1)

    // if nothhing left in array (in case there were negatives)
    if (!arr.length) return 1
    
    // return least non occurring integer
    if (arr[0] !== 1) return 1

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] > arr[i] + 1) return arr[i] + 1
    }

    // return the largest element since nothing is missing
    return arr[arr.length - 1] + 1
}


var t = solution([-1, -3])
t

var t = solution([1, 2, 3])
t

var t = solution([5, 5, 5, 5, 5])
t