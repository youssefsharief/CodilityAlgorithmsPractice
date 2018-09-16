
function getMinimumDifference(a, b) {
    let resultArr = [];
    for (let i = 0; i < a.length; i++) {
        resultArr.push(checkForPair(a[i], b[i]))
    }
    return resultArr
}

function checkForPair(str1, str2) {
    if (str1.length !== str2.length) {
        return -1
    } else {
        const str1Log = log(str1)
        const str2Log = log(str2)
        return countDifference(str1Log, str2Log)
    }
}


function countDifference(str1Log, str2Log) {
    let count = 0
    Object.keys(str1Log).forEach(key => {
        if (str2Log[key]) {
            console.log(str2Log[key])
            count = count + Math.abs(str2Log[key] - str1Log[key])
        } else {
            count = count + str1Log[key]
        }
    })
    Object.keys(str2Log).forEach(key => {
        if (!str1Log[key]) {
            count = count + str2Log[key]
        }
    })
    return count / 2
}

function log(str) {
    const log = {}
    str.split('').forEach(char => {
        if (log[char]) {
            log[char]++
        }
        else {
            log[char] = 1
        }
    })
    return log
}


// var s1 = "teqt"
// var s2 = "tset"
let a = ['a', 'jk', 'abb', 'mn', 'abc'];
let b = ['bb', 'kj', 'bbc', 'op', 'def']

var result = getMinimumDifference(a, b);

console.log(result)