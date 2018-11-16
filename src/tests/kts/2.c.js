const angles = [10, 15, 30, 95, 180, 265, 300, 350, 359]
const degreeDiff = (x, y) => Math.min(Math.abs(x - y), 360 - Math.abs(x - y))
const nearestDegreeDiff = (mainAngle, clockWiseAngle, antiClockWiseAngle) => Math.min(degreeDiff(mainAngle, clockWiseAngle), degreeDiff(mainAngle, antiClockWiseAngle))
const clockWiseDifference = (mainAngle, clockWiseAngle) => clockWiseAngle - mainAngle
const antiClockWiseDifference = (mainAngle, antiClockWiseAngle) => 360 - (antiClockWiseAngle - mainAngle)

const nearestAngle = (mainAngle, clockWiseAngle, antiClockWiseAngle) =>
    degreeDiff(mainAngle, clockWiseAngle) < degreeDiff(mainAngle, antiClockWiseAngle) ?
        clockWiseAngle : antiClockWiseAngle

function uniqueness (angles) {
    const uniquenessArr = []
    for (let i = 1; i < angles.length - 1; i++) {
        const uniqueness = angles[i+1] - angles[i-1] 
        uniquenessArr.push(uniqueness) 
        
    }
    uniquenessArr
}

uniqueness([42,90,110])

// const uniqueness = (mainAngle, clockWiseAngle, antiClockWiseAngle) => {
//     const near = nearestAngle(mainAngle, clockWiseAngle, antiClockWiseAngle)
//     const isNearClockWise = near===clockWiseAngle
//     let o = degreeDiff(mainAngle, near) 
//     o

//     const uniqueness = degreeDiff(mainAngle, near) + 360 - degreeDiff(mainAngle, isNearClockWise)
//     return uniqueness
    
// }

// function orderUniqueness(angles) {
//     // there should be a conditional here since the last item in angles array or first item in angles array might be bpth
//     // leass than 180 or larger than 360
//     const degreeDiffForFirstAngle = Math.min(angles[1] - angles[0], 360 - angles[angles.length - 1])
//     const uniqueness = [angles]
//     angles.forEach((angle, i, arr) => {

//     });
// }

const u = uniqueness(90, 110, 42)
u