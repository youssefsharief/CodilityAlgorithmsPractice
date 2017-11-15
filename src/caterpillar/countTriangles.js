function solution(A) {
    A.sort((a, b) => a - b)
    const log = getIndexLog(A);
    let counter = 0

    for (let i = 0; i < A.length - 1; i++) {
        for (let j = i + 1; j < A.length; j++) {
            const maxValue = A[i] + A[j]
            let maxIndex = getMaxIndex(log, maxValue, A)
            if (!maxIndex) maxIndex = A.length
            const acc = maxIndex - j - 1
            counter += acc
        }
    }
    return counter
}

function getMaxIndex(log, maxValue, A) {

    let maxIndex
    for (let z = maxValue; z <= A[A.length - 1]; z++) {
        if (log[z]) {
            maxIndex = log[z]
            break
        }
    }
    return maxIndex
}

function getIndexLog(A) {
    const log = {}
    A.forEach((x, i) => {
        if (!log[x]) log[x] = i
    })
    return log
}

let t = [10, 2, 5, 1, 8, 12]
t= [10, 21, 22, 100, 101, 200, 300]
// let y = [5, 7, 8, 10, 11, 13]
r = solution(t)
r
