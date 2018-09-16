

function solution(arr) {
    arr.sort((a,b)=> b-a)
    let result  = 0
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i] * Math.pow(2, i)
    }
    return result
}

let arr = [1,3,2]
let y = solution(arr)
y