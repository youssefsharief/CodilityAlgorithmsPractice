

function solution(arr) {
    let min = Infinity
    arr.sort()
    for (let i = 0; i < arr.length; i++) {
        const difference = Math.abs(arr[i] - arr[i+1])
        if (difference < min) {
            min = difference
        }
    }
    return min
}

let arr = [4, 55, 44, 5, 6, 7, 87, 54, 43, 78]
let y = solution(arr)
y