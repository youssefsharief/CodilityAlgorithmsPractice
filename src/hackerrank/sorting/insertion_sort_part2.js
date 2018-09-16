function insertionSort2(n, arr) {
    for (let i = 1; i < arr.length; i++) {
        const rightArr = arr.slice(i + 1, arr.length)
        const needToBeSorted = arr.slice(0, i + 1)
        const sortedPortion = checkAllpreviousValues(needToBeSorted)
        arr = sortedPortion.concat(rightArr)
        console.log(convertArrToString(arr))
    }
    return arr
}

function checkAllpreviousValues(splicedArr) {
    const val = splicedArr[splicedArr.length - 1]
    const indexTOBeInserted = getIndexToBeInserted(splicedArr, val)
    if (indexTOBeInserted !== null) {
        splicedArr.splice(indexTOBeInserted, 0, val)
        splicedArr.splice(-1, 1)
    }
    return splicedArr
}

function getIndexToBeInserted(splicedArr, val) {
    let position = null;
    for (let j = splicedArr.length - 2; j >= 0; j--) {
        if (val < splicedArr[j]) {
            position = j
        }
    }
    return position
}

function convertArrToString(arr) {
    return arr.join(' ')
}

const arr = [9, 8, 5, 6, 2, 3]

let y = insertionSort2(3, arr)

