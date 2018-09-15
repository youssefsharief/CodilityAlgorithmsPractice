// recursion 
function fibRecurs(n) {
    return( n == 1 || n == 2) ? 1 : fib(n-1) + fib(n-2)
}


// memoized solution
const log = {}
function fibMem(n) {
    if ( n == 1 || n == 2) {
        return 1
     } else {
         if (log[n]) {
             return log[n]
         }  else {
             log[n] = fib(n-1) + fib(n-2)
             return log[n]
         }
     }
}

// buttom up approach
const log = {}
function fibButtonUp(n) {
    if (n == 1 || n == 2) {
        return 1
    } else {
        log[1] = 1
        log[2] = 1
        for (let i = 3; i <= n; i++) {
            log[i] = log[i - 1] + log[i - 2]
        }
        return log[n]
    }
}

y = fibButtonUp(30)
y





