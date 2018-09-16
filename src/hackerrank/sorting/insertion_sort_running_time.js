function runningTime(arr) {
    let shifts = 0
    for (let i = 1; i < arr.length; i++) {
        const rightArr = arr.slice(i + 1, arr.length)
        const needToBeSorted = arr.slice(0, i + 1)
        let [sortedPortion, localShifts] = checkAllpreviousValues(needToBeSorted)
        arr = sortedPortion.concat(rightArr)
        shifts =  shifts + localShifts
    }
    return shifts
}

function checkAllpreviousValues(splicedArr) {
    const val = splicedArr[splicedArr.length - 1]
    const [indexTOBeInserted, shifts] = getIndexToBeInserted(splicedArr, val)
    if (indexTOBeInserted !== null) {
        splicedArr.splice(indexTOBeInserted, 0, val)
        splicedArr.splice(-1, 1)
        return [splicedArr, shifts] 
    }
    return [splicedArr, 0]
    
}

function getIndexToBeInserted(splicedArr, val) {
    let position = null;
    let shifts = 0
    for (let j = splicedArr.length - 2; j >= 0; j--) {
        if (val < splicedArr[j]) {
            position = j
            shifts++
        }
    }
    return [position, shifts]
}


const arr = [2,1,3,1,2]

let y = runningTime(arr)

y