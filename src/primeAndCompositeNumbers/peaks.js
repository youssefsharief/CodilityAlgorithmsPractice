function getPeaks(A) {
    let peaks = []
    let factors = []
    const n = A.length
    for (var i = 1; i < n; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1])
            peaks.push(i)
    }

    for (var i = 0; i <= Math.sqrt(n); i++) {
        if (n % i === 0 && i>1) {
            factors.push(i)
            // factors.push(n/i)
        }
    }
    factors.sort()


    for (let i = 0; i < factors.length ; i++) {
        
        
        factors[i]  // 2
        for (var j = 0; i < peaks.length; j++) {
            // if peaks[j] < factors[i]
            
        }

        
        
    }


    return [peaks,factors]


}

var t = getPeaks([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])
t


