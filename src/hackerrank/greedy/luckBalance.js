function luckBalance(n, k, contests) {
    let {important, unimportantScore} = getInitialScoreAndMpotentialImportantScores(contests)
    important.sort((a,b)=> b-a)
    return unimportantScore + getImportantScore(k, important)
}


function getInitialScoreAndMpotentialImportantScores(contests) {
    let unimportantScore = 0
    let important = []
    for (let i = 0; i < contests.length; i++) {
        if (contests[i][1] === 0) {
            unimportantScore += contests[i][0]
        } else {
            important.push(contests[i][0])
        }
    }
    return {unimportantScore, important}
}

function getImportantScore(k, important) {
    let losed = 0
    let importantScore = 0
    for (let i = 0; i < important.length; i++) {
        if (losed<k) {
            losed++
            importantScore += important[i]
        } else {
            importantScore -= important[i]
        }
    }
    return importantScore
}

let t = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]

let r = luckBalance(0, 3, t)
r