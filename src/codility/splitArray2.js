function solution(X, A) {

    let log = []
    for (var i = 0; i < A.length; i++) {
        if (A[i] === X) log.push(i)
        
    }
    return log
}

let X = 4
let A = [5,4,8,9,6,4,5,5,4,3,6,5,4,8,4,72,4]
let t = solution(X,A)
t