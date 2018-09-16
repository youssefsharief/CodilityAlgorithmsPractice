function solution(num) {
    let result = 0
    for (var i = 0; i < Math.sqrt(num); i++) {
        if (num % i === 0) result += 2
    }
    if (Math.sqrt(num) % 1 === 0) result++
    return result
}

var t = solution(17)
t





