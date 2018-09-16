
function solution(A) {
    A.sort((a, b) => Math.abs(a)  -  Math.abs(b))
    return A.reduce((acc, x,i, self)=>{
        if(i === self.length - 1 ) return Math.min(Math.abs(x*2) ,acc)
        else return Math.min(Math.abs(x + self[i+1]), acc, Math.abs(x*2))
    }, Infinity)
}
let A = [-8,4,5,-10,3]
A=[1,2,3]
A=[0]
A=[100000]
let r = solution(A)
r
