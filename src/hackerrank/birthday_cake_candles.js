function birthdayCakeCandles(n, arr) {
    let max = 0
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === max) count++
        if (arr[i] > max) {
            max = arr[i]
            count = 1
        }
    }
    return count
}