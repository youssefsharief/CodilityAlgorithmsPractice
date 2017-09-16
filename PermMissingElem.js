

function solution(arr) {
    if (!arr.length) return NaN
    let item = (arr.sort((a, b) => a - b).find((element, i, self) => {

        if(i==self.length-1) return false
        return self[i] + 1 != self[i + 1]

    }))

    return item + 1

}


var x = solution([1, 2, 3, 4, 5, 6, 7, 8, 11, 9, 10,12,13])
x

