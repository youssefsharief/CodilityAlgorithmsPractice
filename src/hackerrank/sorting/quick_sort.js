function quickSort(arr) {
    const [right, left, equal] = [[], [], [arr[0]]]
    for (let i = 1; i < arr.length; i++) {
        arr[i] === arr[0] ? equal.push(arr[i]) : arr[i] < arr[0] ? left.push(arr[i]) : right.push(arr[i])
    }
    console.log(convertArrToString(left.concat(equal, right)))
}

function convertArrToString(arr) {
    return arr.join(' ')
}

let r = [4, 5, 3, 7, 2]

quickSort(r)