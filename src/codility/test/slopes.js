// function solution(A){
//     A.forEach((point) {

//     }, this);
// }

function solution(A){
    A.sort((a, b) => {
        return b.y / b.x - a.y / a.x
    })
    let savedSlope = { value: null, direction: null }
    let count = 0
    for (var i = 0; i < A.length; i++) {
        const currentSlope = { value: A[i].y / A[i].x, direction: A[i].y > 0 ? 'positive' : 'negative' }
        if (currentSlope.value !== savedSlope.value || currentSlope.direction !== savedSlope.direction) count++
        savedSlope = currentSlope
    }
    return count
}

let A = [{ x: -1, y: -2 }, { x: 1, y: 2 }, { x: 2, y: 4 }, { x: -3, y: 2 }, { x: 2, y: -2 }]
A = [{x:-1, y:-2},{x:-2, y:-4}, {x:-3, y:-6}, {x:-1, y:-2}]
let t = solution(A)
console.log(t)
