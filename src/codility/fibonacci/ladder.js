
function solution(A, B) {

    // Check what is the biggest number to generate all fib till this number
    const largestNumber = getMaxNumberInArr(A)
    const fib = getFibArr(largestNumber)
    const res = []
    for (let i = 0; i < A.length; i++) {
        res.push(fib[A[i] + 1] % (1 << B[i]));
    }
    return res
}

const getMaxNumberInArr = (A) => A.reduce((acc, x) => Math.max(acc, x), 0)
const getFibArr = (max) => {
    const fib = new Array(max + 3).fill(0)
    fib[1] = 1
    for (let i = 2; i < fib.length; i++) {
        fib[i] = (fib[i - 1] + fib[i - 2]) % (1 << 30);
    }
    return fib
}   
let A, B
A = [4, 4, 5, 5, 1]
B = [3, 2, 4, 3, 1]

let y = solution(A, B)
y