function solutionBadPerf(N, A) {
    let max = 0
    let res = new Array(N).fill(0)

    A.forEach(function (x) {

        if (x <= N) {
            res[x - 1]++
            max = Math.max(res[x - 1], max)
        }
        if (x > N) {
            res = new Array(N).fill(max)
        }
    });
    return res
}

var t = solutionBadPerf(3, [3, 4, 4, 6, 6, 1, 4, 6, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 6, 3, 3, 3, 6])
t








function solution(N, A) {

    const { totalMax, log } = getTotalMaxAndLatestElementsLog(A, N)
    let res = new Array(N).fill(totalMax)
    // Increment for latest elements
    log.forEach((x, i) => {
        res[i - 1] += x
    })
    return res


}



function getTotalMaxAndLatestElementsLog(A, N) {
    const log = new Map()

    // save log for all occurrance for all numbers that occurred before big number
    // get total max for all small numbers that occurred before the latest big number
    // When we get total mix we could fill our array 
    let currentMapMax = 0
    let totalMax = 0
    for (let i = 0; i < A.length; i++) {
        if (A[i] <= N) {
            const currentVal = log.get(A[i])
            log.set(A[i], currentVal ? currentVal + 1 : 1)
        }
        else if (A[i] > N && log.size) {
            currentMapMax = getMaxForCurrentMap(log)
            totalMax += currentMapMax
            log.clear()
        }
    }

    
    return {
        totalMax, log
    }
}



function getMaxForCurrentMap(log) {
    let max = 0
    log.forEach(x => {
        max = Math.max(x, max)
    })
    return max
}


var t = solution(3, [3, 4, 4, 6, 6, 1, 4, 6, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 6, 3, 3, 3, 6])
t


