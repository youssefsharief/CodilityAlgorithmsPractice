// Find the the number of consequent numbers in arrays that has a sum between 7 and 10 inclusive

function solution(A) {
    let count = 0
    for (var i = 0; i < A.length; i++) {
        let sum = A[i]
        if (sum > 10 ) break;
        if (sum >= 7 && sum <= 10) count++
        for (var j = i+1 ; j < A.length ; j++) {
            sum += A[j]
            if (sum > 10 ) break;
            sum
            if (sum >= 7 && sum <= 10) count++
        }
    }
    return count
}

