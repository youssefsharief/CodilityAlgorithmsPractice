function solution(area){
    const sqrt =  Math.sqrt(area)
    if(area/sqrt % 1 !== 0) return area/sqrt * 4
    if(area/(sqrt-1) % 1 !== 0) return 
    
    
}


module.exports  = solution

var x= Math.sqrt(10000)
x

solution(10000000)