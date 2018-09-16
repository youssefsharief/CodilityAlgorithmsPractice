


function solution(arr) {
    let minimum = Infinity
    let solutionArr = []
    arr.sort((a, b) => a - b)
    for (let i = 1; i < arr.length; i++) {
        const absVal = Math.abs(arr[i] - arr[i - 1])
        if (absVal < minimum) {
            solutionArr = []
            minimum = absVal
            solutionArr.push(arr[i - 1])
            solutionArr.push(arr[i])
        } else if (absVal === minimum) {
            solutionArr.push(arr[i - 1])
            solutionArr.push(arr[i])
        }
    }
    solutionArr.sort((a, b) => a - b)
    return solutionArr
}
let te = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, 0]
te = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470 ]
te = [5, 4, 3, 2]
let y = solution(te)
y