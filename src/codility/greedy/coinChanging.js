function greedyCoin(M, amount) {
    let total = 0
    let res = []

    while (amount - total > 0) {
        const currentCoin = findOptimumLocalCoin(M, amount-total)
        res.push(currentCoin)
        total += currentCoin
    }
    return res
}
function findOptimumLocalCoin(M, amount){
    for (var i = M.length - 1; i >= 0; i--) {
        if (M[i] <= amount)   return M[i] 
    }
}

let M = [1, 3, 4]
let amount = 17

let y = greedyCoin(M, amount)
y



