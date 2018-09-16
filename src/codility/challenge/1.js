function solution(A) {
    let arr = A.split(" ")
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]==='O'){
            let count = 0
            if(arr[i-10] && arr[i-10]==='X') count++
            if(arr[i-9] && arr[i-9]==='X') count++
            if(arr[i-8] && arr[i-8]==='X') count++
            if(arr[i+10] && arr[i+10]==='X') count++
            if(arr[i+9] && arr[i+9]==='X') count++
            if(arr[i+8] && arr[i+8]==='X') count++
            if(arr[i-1] && arr[i-1]==='X') count++
            if(arr[i+1] && arr[i+1]==='X') count++
            arr[i] = count
        }
    }

    // Convert array to string
    // Replace 
     return arr.join(" ")
}




let arr = `X O O X X X O O 
 O O O O X O X X 
 X X O X X O O O 
 O X O O O X X X 
 O O X X X X O X 
 X O X X X O X O 
 O O O X O X O X 
 X O X X O X O X`
let t = solution(arr)
console.log(t)



module.exports = solution

