function fibonacciSlowest(n) {
    if (n <= 1)  return n
    else return fibonacciSlowest(n - 1) + fibonacciSlowest(n - 2)
}

var t = fibonacciSlowest(9)
t


function fibonacciDynamic(n) {
    let fib = new Array(n+2).fill(0)
    fib[1]=1
    for (var i = 2; i < fib.length; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n]
}

var c = fibonacciDynamic(4)
c
