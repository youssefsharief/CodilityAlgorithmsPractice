function solution(x){
    for (var y = 1; y <= x; y++) {
        let isGood = true
        for (let i = 1; i <= 9; i++) {
            if (y % i !== 0) {              
                isGood = false
                break;
            }
        }
        if (isGood) console.log(y)
    }
    
}

solution(3000)
