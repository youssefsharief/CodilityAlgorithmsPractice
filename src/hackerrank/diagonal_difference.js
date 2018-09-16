function diagonalDifference(a) {
    const primary = a.reduce((acc, x, i) => x[i] + acc, 0)
    const secondary = a.reduceRight((acc, x, i) => x[a.length-i-1] + acc, 0)
    return Math.abs(primary - secondary)   
}
let r = diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])

r
