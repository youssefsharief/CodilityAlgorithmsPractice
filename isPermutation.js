function solution(arr) {
    arr=arr.sort((a, b) => a - b)
    if(arr[0] !==1) return 0
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== arr[i] + 1) return 0
    }
    return 1
}

var arr = [10,0,1, 5,8,9,7,2,3,4,6]

var t = solution(arr)
t
