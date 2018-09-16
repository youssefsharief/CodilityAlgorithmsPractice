var arr = [0, 0, 0, 0, 0, 1, 0, 1, 1, 0]

function solution(arr) {
    const sum = (a, b) => a + b
    let cum = 0
    let pairsArr = []
    arr.forEach(el => el === 0 ? cum++ : pairsArr.push(cum) )

    let pairs = pairsArr.reduce(sum, 0)
    return pairs > 1000000000 ? -1 : pairs
}

var t = solution(arr)
t








function solutionNotPerformant(arr) {
    let pairs = 0
    arr.forEach((element, i) => {
        if (element === 0) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] == 1) pairs++
            }
        }
    });
    if (pairs > 1000000000) return -1
    else return pairs
}


