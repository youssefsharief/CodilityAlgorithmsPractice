

function oddNumbers(l, r) {
    let arr = []
    for (let i = l[0]; i <= r[r.length-1]; i++) {
        if(i%2!==0) arr.push(i)
    }
    return arr
}


let r = oddNumbers([3,9], [3,5,7,9])

r