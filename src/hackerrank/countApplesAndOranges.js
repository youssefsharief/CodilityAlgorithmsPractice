function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesInTarget = 0
    let orangesInTarget = 0
    apples.forEach(appleDistance => {
        if(appleDistance>=(s-a) && appleDistance <=(t-a)) {
            applesInTarget++
        }
    })
    oranges.forEach(orangeDistance => {
        orangeDistance
        if((-orangeDistance)>=(b-t) && (-orangeDistance) <=(b-s)) {
            orangesInTarget++
        }
    })
    console.log(applesInTarget.toString())
    console.log(orangesInTarget.toString())
}

let t = countApplesAndOranges(7,11, 5, 15, [-2, 2, 1], [5, -6])
t
