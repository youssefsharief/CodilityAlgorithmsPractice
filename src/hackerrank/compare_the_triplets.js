
function solve(a0, a1, a2, b0, b1, b2){
    let aPoints = 0
    let bPoints = 0
    if (a0 > b0) aPoints ++
    else if (a0 < b0) bPoints++
    if (a1 > b1) aPoints ++
    else if (a1 < b1) bPoints++
    if (a2 > b2) aPoints ++
    else if (a2 < b2) bPoints++
    return [aPoints, bPoints]
}
