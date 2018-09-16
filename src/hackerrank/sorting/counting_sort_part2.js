function countingSort(arr) {
    const solutionArr = []
    const countingArr = getCountingArr(arr)
    for (let i = 0; i < countingArr.length; i++) {
        for (let j = 0; j < countingArr[i]; j++) {
            solutionArr.push(i)
        }     
    }
    return solutionArr
}

function getCountingArr(arr) {
    let countingArr = Array(100).fill(0)
    for (let i = 0; i < arr.length; i++) {
        countingArr[arr[i]]++
    }
    return countingArr
}
let r = [4,4,4,4,4,4,4,7,7,8,4,5,32,7,4,7,1]
let y = countingSort(r)
y