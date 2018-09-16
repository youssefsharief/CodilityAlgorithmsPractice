
function solution(arr) {
    let step = 0
    sum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 1 ) {
            sum = sum + arr[i]
            step = i 
            step
        } else if(arr[i] < 1){
            checkNext6Numbers()

        } else if (i==arr.length-1) {
            sum = sum + arr[i]
        }
    }
    return sum
}

let arr = [1,-2, 0,9,-1,-2, 2, -3, -3, -5, -6, -7, -50000, -4,-6, -7, -8, -4, 8, -3, -5, 8, 8, 8]
let y = solution(arr)
y

// || i-step == 6