// Do not use js due to problem with infinity

function solution(n) {
    let twos = countFactors(n, 2) - countFactors(n, 5)
    if (twos >= 2505) {
        twos = (twos - 5) % 2500 + 5
    }
    return factorialEnhanced(n) * Math.pow(2, twos, 1000) % 1000
}



function factorialEnhanced(n) {
    return evenFactorialEnhanced(n) * oddFactorialEnhanced(n) % 1000
}


function evenFactorialEnhanced(n) {
    n
    if (n == 0) {
        return 1
    } else {
        return factorialEnhanced(Math.floor(n / 2))
    }
}


function oddFactorialEnhanced(n) {
    n
    if (n == 0) {
        return 1
    } else {
        return oddFactorialEnhanced(Math.floor(n / 5)) * factorialCoprime(n) % 1000

    }
}


function factorialCoprime(n) {
    n = n% 1000
    let product = 1
    for (let i = 0; i < n + 1; i++) {
        if (i % 2 != 0 && i % 5 != 0) {
            product = i * product % 1000
        }
    }
    return product
}


function countFactors(bigNumber, n) {
    if (!bigNumber) {
        return 0
    } else {
        return Math.floor(bigNumber / n) + countFactors(Math.floor(bigNumber / n), n)
    }

}

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.on('line', (line) => {
//     console.log(solution(parseInt(line)))
//     rl.close()
// })

let r = solution(10000).toString()
r

module.exports = {
    countFactors, factorialCoprime, oddFactorialEnhanced, evenFactorialEnhanced, factorialEnhanced, solution
}