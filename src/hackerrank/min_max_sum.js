function miniMaxSum(arr) {
    let max = 0
    let min = Infinity
    const sum = arr.reduce((acc, x) => acc + x, 0)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log(`${sum - max} ${sum - min}`)
}