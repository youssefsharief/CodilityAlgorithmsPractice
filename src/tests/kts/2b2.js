const numberOfStatements = 6
const entries = [[1, 3], [3, 2], [2, 4], [1, 4]]
const numberOfImplications = 3
const fromToLog = {}
const toFromLog = {}
const numberOfConnectionsLog = {}
let stack = []
entries.forEach(pair => {
    const from = pair[0]
    const to = pair[1]
    if (!fromToLog[from]) {
        fromToLog[from] = []
    }
    if (!toFromLog[to]) {
        toFromLog[to] = []
    }
    fromToLog[from].push(to)
    toFromLog[to].push(from)
})


function dpfs(currentNodeNumber) {
    if (fromToLog[currentNodeNumber]) {
        fromToLog[currentNodeNumber].forEach((visitedNode) => {
            dpfs(visitedNode)
        })
    }
}

function search() {
    let sta = [entries[0][0]]
    sta
    while (sta.length) {
        let currentNodeNumber = sta[sta.length - 1]
        currentNodeNumber
        if (fromToLog[currentNodeNumber]) {
            fromToLog[currentNodeNumber].forEach(visitingNode=>{
                sta.push(visitingNode)
                currentNodeNumber = visitingNode
            })
            
        } else {
            sta.pop()
        }
    }
}

let max = 0
function checkMaximumSizeOfStack(sta) {
    max = Math.max(max, sta.length)
    max
    let l = sta.length
    l
}



function addCount(node) {
    if (!numberOfConnectionsLog[node]) {
        numberOfConnectionsLog[node] = 1
    } else {
        numberOfConnectionsLog[node]++
    }

    // return numberOfConnectionsLog[node] ? numberOfConnectionsLog[node]++ : numberOfConnectionsLog[node] = 1
}

search()
fromToLog
toFromLog
stack
// toFromLog
// numberOfConnectionsLog
