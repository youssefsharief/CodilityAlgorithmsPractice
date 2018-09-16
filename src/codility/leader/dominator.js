function solution (A){
    if (A.length == 0) return -1
    if (A.length === 1) return 0
    const {maxCount, mode} = getMaxCountAndMode(writeLog(A))
    if (maxCount <= (A.length/2)) return -1
    return A.findIndex(x=>  x==mode)
}


var t = solution([1,2,5,5,5,5,5,5,2,2,2,2,5,5,5,5,5,5,5,5,5,5])
t
var t = solution([5,5])
t
var t = solution([15,5,2,5,5])
t
var t = solution([0])
t
var t = solution([1,2,5,5,5,5,5,5,2,2,2,2,5,5,5,5,5,5,5,5,5,5])
t

function writeLog(A){
    const log= {}
    A.forEach(x=>{
        if(!log[x]) log[x] = 1
        else {
            log[x] += 1 
        }
    })
    return log
}


function getMaxCountAndMode(log){
    let maxCount = -Infinity
    let mode = null
    Object.keys(log).forEach(x=>{
        if( log[x] > maxCount) {
            maxCount = log[x]
            mode = x
        }
    })

    return { mode, maxCount }
}
