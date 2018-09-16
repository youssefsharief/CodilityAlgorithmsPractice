function insertionSort1(n, arr) {
    let unsortedVar = arr[arr.length-1]
    for (let i = arr.length-1; i > 0; i--) {
        arr[i] = arr[i-1]
        if(arr[i] < unsortedVar ) {
            arr[i] = unsortedVar
            return console.log(convertArrToString(arr))
        } else {
            console.log(convertArrToString(arr))
        }
    } 
    arr[0] = unsortedVar
    return console.log(convertArrToString(arr))
    
}

function convertArrToString(arr) {
    return arr.join(' ')
}

const arr = [2, 4, 6, 8, 1]

let y  = insertionSort1(3, arr)