// also my solution

function solution(A) {
    if (A.length == 0) return -1
    if (A.length === 1) return 0
    const unsorted = A.slice(0)
    A.sort((a, b) => a - b)
    let count = 0
    // Grab the middle value in the sorted which is proposedly the denominator
    const suggestedMode = A[Math.floor(A.length / 2)]

    // Look to the right of the middle value
    for (var i = Math.floor(A.length / 2); i < A.length; i++) {
        var t = Math.floor(A.length / 2)
        if (A[i] === suggestedMode) count++
        else break
    }

    // Look to the left of the middle value
    for (var i = Math.floor(A.length / 2)-1; i >= 0; i--) {
        if (A[i] === suggestedMode) count++
        else break
    }
    
    if (count>A.length/2) return unsorted.findIndex(x => x===suggestedMode)
    else return -1

}

const A = [2, 1, 1, 1, 3]
var t = solution(A)
t



