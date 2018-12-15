function recurs(n) {
    if(n===1) {
        return 1
    } else if(n==2) {
        return 3
    } else {
        if (n-2) {
            return 3 + recurs(n-2)
        } else {
            return 1+ recurs(n-1)
        }
        
    }
}

let y = recurs(6)
y
