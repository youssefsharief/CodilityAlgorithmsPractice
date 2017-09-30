function solutionBadPerf(M, A) {
    let count = A.length
    for (var i = 0; i < A.length; i++) {
        let unique = new Set([A[i]])
        for (let j = i + 1; j < A.length; j++) {
            unique.add(A[j])
            if (j-i+1 !== unique.size) break
            count++
        }
    }
    return count
}

function solutionNotCoreect(M, A) {
    let count = A.length 
    let n=1
    for (var i = 0; i < A.length; i=n) {
        let unique = new Set([A[i]])
        for (let j = i + 1; j < A.length; j++) {
            unique.add(A[j])
            if ( j-i+1 !== unique.size) {
                n=j
                
                break
            }
            count  = count + j-i -1
            if (j===A.length-1) return count
        }
    }
    return count
}




// let A = [2,2,2]
// let t = solution(6, A)
// t

A = [3,4,5,5,2]
t = solution(6, A)
t


A = [1,2,3,4,5]
t = solution(6, A)
t


A = [5,56,5]
t = solutionBadPerf(6, A)
t
// t = solution(6, A)
// t