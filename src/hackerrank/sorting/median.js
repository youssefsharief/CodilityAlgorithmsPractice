function median(arr) {
    arr.sort((a, b) => a - b)
    return arr[(arr.length - 1) / 2]
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

let y = median(arr)
y