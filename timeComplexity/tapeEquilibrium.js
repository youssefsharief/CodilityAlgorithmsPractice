function solution (A) {
    let minDiff = Infinity;
    let sumLeft = 0;
    let sumRight = A.reduce((x, y) => x + y, 0);
    for (let i = 0; i < A.length-1; i++) {
        sumLeft += A[i]
        sumRight -= A[i]
        const diff = Math.abs(sumRight - sumLeft)
        minDiff = Math.min(diff,minDiff)
        if (minDiff===0) return 0
    }
    return minDiff;
}   

let t = solution([-1000,1000])
t
