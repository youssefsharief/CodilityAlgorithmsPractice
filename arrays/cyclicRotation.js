function solution(arr,k){
    return arr.concat(arr.splice(0,arr.length-k));
}

