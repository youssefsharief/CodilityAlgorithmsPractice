function solution(arr) {
    const add = (a, b) => a + b


    let min = Infinity
    for (let i = 0; i < arr.length - 1; i++) {
        const first = arr.slice(0, i + 1).reduce(add, 0)
        const last = arr.slice(i + 1).reduce(add, 0)
        const absoluteDifference = Math.abs(first - last)
        if (absoluteDifference < min) min = absoluteDifference
    }

    return min

}


let t = solution([3, 1, 2, 4, 3])
t


