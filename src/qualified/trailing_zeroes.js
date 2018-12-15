function findTrailingZeros(n) {
    let count = 0
    let i=5
    while (n/i>=1) {
        count += Math.floor(n/i)
        i *= 5
    }
    count
    return count
}

findTrailingZeros(5)