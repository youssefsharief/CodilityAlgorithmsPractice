function isTriangle(a, b, c) {
    if ((a + b > c) && (a + c > b) && (c + b > a)) {
        return 'YES'
    } else {
        return 'NO'
    }
}


function triangleOrNot(a, b, c) {
    let resultsArr = []
    for (let i = 0; i < a.length; i++) {
        resultsArr.push(isTriangle(a[i], b[i], c[i]))
    }
    return resultsArr
}

let a = [5, 2, 7]
let b = [7, 3, 2]
let c = [9, 3, 2]

let y = triangleOrNot(a, b, c)
y

let r = isTriangle(7,2,2)
r



// 7 10 7     2 3 4    2 7 4    