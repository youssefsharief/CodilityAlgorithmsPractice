function solution(A){
    const {maxCount, mode} = getMaxCountAndMode(writeLog(A))
    // if there is no leader
    if (maxCount <= A.length/2 ) return 0
    
    let discoverdLeaderValuesTillNow = 0
    let equileaders = 0
    for (var i = 0; i < A.length; i++) {
        if (A[i] == mode) discoverdLeaderValuesTillNow++
        // if there is a leader in the left side of the array
        if (discoverdLeaderValuesTillNow > (i+1)/2) {
            // check if there is a leader in the right side of the array
            let remainingSeatsToTheRight = (A.length - (i + 1))
            if ((maxCount - discoverdLeaderValuesTillNow) > remainingSeatsToTheRight/2) equileaders ++
        }
    }
    return equileaders

}



var r = solution([4,3,4,4,4,2])
r

var r = solution([4,3,4,4,4])
r

var r = solution([4,4])
r

var r = solution([4,1])
r

var r = solution([4,3,4,4,4,2,4])
r








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
