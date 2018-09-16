function staircase(n) {
    for (let i = 0; i < n; i++) {
        if (i !== 0) process.stdout.write('\n')
        for (let j = 0; j < n - i - 1; j++) {
            process.stdout.write(' ')
        }
        for (let j = n - i; j <= n; j++) {
            process.stdout.write('#')
        }
    }
}


staircase(6)