function solution(W, limit) {
    let total = 0
    let skinnyRemoved=0
    for (var i = W.length - 1; i >= skinnyRemoved; i--) {
        if (W[i] + W[skinnyRemoved] <= limit) { 
            skinnyRemoved++
        }
        total++
    }
    return total
}

let W = [60, 70, 75, 78, 79, 85, 87, 170, 180]
let limit = 200
let y = solution(W, limit)
y
