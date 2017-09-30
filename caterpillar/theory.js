// Find the the number of consequent numbers in arrays that has a sum between 7 and 10 inclusive

function solution(A) {
    let result = 0
    for (var i = 0; i < A.length; i++) {
        let z = i + 2
        for (var j = i + 1; j < A.length; j++) {
            while (z < A.length && A[i] + A[j] > A[z]) {
                z += 1
            }
            result += z - j - 1

        }
    }
    return result
}

let t = [10, 2, 5, 1, 8, 12]
r = solution(t)
r
