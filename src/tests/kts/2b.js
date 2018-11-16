function solution(n, doubleArr) {
    let firstStillToDo = n
    let secondStillToDo = 2 * (n - 1)
    doubleArr.forEach(innerPair => {
        if (innerPair[1] === innerPair[0] + 1) {
            firstStillToDo--
            secondStillToDo--
        } else if (innerPair[0] === innerPair[1] + 1) {
            secondStillToDo--
            secondStillToDo--
        } else if (innerPair[0] === n && innerPair[1] === 1) {
            firstStillToDo--
        }
    })
    return Math.min(firstStillToDo, secondStillToDo)
}



const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numberOfStatements, numberOfUpcomingImplicationsOnTheCommandLine, testCasesCount;
let pairsArr = [];
rl.on('line', function (line) {
    if (!testCasesCount) {
        testCasesCount = parseInt(line)
    } else {
        if (!numberOfStatements && !numberOfUpcomingImplicationsOnTheCommandLine) {
            setInitialConfigForTestCase(line)
        } else {
            addEntry(line)
        }
        if (pairsArr.length == numberOfUpcomingImplicationsOnTheCommandLine) {
            calculateSolutionAndResetTestCase()
        }
    }
});

const setInitialConfigForTestCase = (line) => {
    const arr = line.split(' ');
    numberOfStatements = parseInt(arr[0])
    numberOfUpcomingImplicationsOnTheCommandLine = parseInt(arr[1])
    
}

const addEntry = (line) => {
    const arr = line.split(' ');
    pairsArr.push([parseInt(arr[0]), parseInt(arr[1])])
}

const calculateSolutionAndResetTestCase = () => {
    console.log(solution(numberOfStatements, pairsArr))
    numberOfUpcomingImplicationsOnTheCommandLine = null
    numberOfStatements = null
    pairsArr = []
}

if (process.argv[2]) {
    const fs = require('fs')
    fs.readFile(process.argv[2], 'utf8', (err, data) => {
        if (err) throw err;
        rl.write(data)
    });
}

// let n = 4
// let doubleArr = [[1,2],[1,3]]
// doubleArr = [[]]
// let s = solution(n, doubleArr)
// s