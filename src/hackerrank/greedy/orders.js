

function solution(arr) {
    return arr
        .map((innerArr, i) => innerArr.concat([innerArr[0] + innerArr[1], i + 1]))
        .sort((a, b) => a[2] - b[2])
        .map(innerArr => innerArr[3])
}

let arr = [[8, 1],
[4, 2],
[5, 6],
[3, 1],
[4, 3],
]
let r = solution(arr)
r

