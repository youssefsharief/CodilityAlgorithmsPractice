function solution(area){
    let minPerimeter = Infinity
    for (var i = 0; i <= Math.sqrt(area); i++) {
        if (area % i === 0) {
            minPerimeter = Math.min( i * 2 + area / i * 2,  minPerimeter) 
        }
    }
    return minPerimeter
}

var t = solution(30)
t
var t = solution(9)
t
var t = solution(1)
t
var t = solution(60)
t

var t = solution(2)
t
module.exports  = solution

