
function solution(arr) {
    let maxIndexes = []
    let moves = 0
    let maxCount = 1
    while (true) {
        let max = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
                maxIndexes = new Array(arr.length).fill(0)
                maxIndexes[i] = 1
                maxCount = 1
            } else if (arr[i] === max) {
                maxIndexes[i]  = 1
                maxCount++
            }
        }
        maxIndexes
        if (maxCount < arr.length) {
            moves = moves + maxCount
            for (let i = 0; i < arr.length; i++) {
                if (maxIndexes[i]) arr[i] = arr[i] + maxCount - 1
                else arr[i] = arr[i] + maxCount
            }
        } else {
            break
        }
    }

    return moves
}

let arr = [5, 6, 8, 8, 5]
arr = [2,2,2]
let t = solution(arr)
