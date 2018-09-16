function countingSort(originalArr) {
    const countingArr = getCountingArr(originalArr)
    countingArr
    for (let i = 1; i < countingArr.length; i++) {
        countingArr[i] = countingArr[i] + countingArr[i-1]
    }
    countingArr
    const solutionArr = []
    for (let i = 0; i < originalArr.length; i++) {
        const keyNumber = originalArr[i][0]
        if (countingArr[keyNumber - 1]) {

        }   else {
            solutionArr[countingArr[i]] = originalArr[i][1]
            countingArr[i]--
            countingArr
        } 
    }
    solutionArr
    return solutionArr
}

function getCountingArr(arr) {
    let countingArr = Array(7).fill(0)
    for (let i = 0; i < arr.length; i++) {
        countingArr[arr[i][0]]++
    }
    countingArr
    return countingArr
}
let r =
    [
        [0, 'ab'],
        [6, 'cd'],
        [0, 'ef'],
        [6, 'gh'],
        [4, 'ij'],
        [0, 'ab'],
        [6, 'cd'],
        [0, 'ef'],
        [6, 'gh'],
        [0, 'ij'],
        [4, 'that'],
        [3, 'be'],
        [0, 'to'],
        [1, 'be'],
        [5, 'question'],
        [1, 'or'],
        [2, 'not'],
        [4, 'is'],
        [2, 'to'],
        [4, 'the'],
    ]
let y = countingSort(r)
y