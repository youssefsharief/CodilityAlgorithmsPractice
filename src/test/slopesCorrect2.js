function solution(A) {
    let count = 0
    let log = {}
    for (var i = 0; i < A.length; i++) {
        const direction = A[i].y > 0 ? 1 : 0;
        const currentSlope = A[i].y / A[i].x
        if (!log[currentSlope]) {
            count++
            log[currentSlope] = [direction]
        }
        else if (log[currentSlope].length && !log[currentSlope].includes(direction)) {
            count++
            log[currentSlope] = log[currentSlope].push(direction)
        }
    }
    return count
}

let A = [{ x: -1, y: -2 }, { x: 1, y: 2 }, { x: 2, y: 4 }, { x: 4, y: 8 }, { x: 3, y: 6 }, { x: -2, y: 4 }, { x: 2, y: 4 }, { x: -3, y: 6 }, { x: -3, y: 2 }, { x: 2, y: -2 }]
let t = solution(A)
console.log(t)