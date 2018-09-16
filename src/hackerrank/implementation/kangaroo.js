function kangaroo(x1, v1, x2, v2) {
    const pointOfIntersection = (x2-x1)/(v1-v2)
    console.log(Number.isInteger(pointOfIntersection))
    return Number.isInteger(pointOfIntersection) && pointOfIntersection > 0 ? 'YES' : 'NO'
}

let r = kangaroo(0,3,4,2)
r
