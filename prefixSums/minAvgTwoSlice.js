


var nums = [ 4, 5, 1, 5, 8,2, 2,1]

// var averages = [0]

// nums.forEach((x,i)=>{
//     let avg = (averages[i]+x) / (i+1)
//     averages.push(avg)
// })


// averages


function solution(arr) {
    var log = []
    for (let i = 0; i < arr.length - 1; i++) {
        let min
        const avg1 = (arr[i] + arr[i + 1]) / 2
        const avg2 = (arr[i] + arr[i + 1] + arr[i + 2]) / 3
        if (i == arr.length - 2) min = avg1
        else min = avg1 <= avg2 ? avg1 : avg2
        
        if (!log[0]) log = [min, i]
        else if (min <= log[0]) {
            log = [min, i]
        }
    }



    return log[1]
}

var t = solution(nums)
t
