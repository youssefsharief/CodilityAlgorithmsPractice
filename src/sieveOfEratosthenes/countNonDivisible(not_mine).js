function solution(A) {

    // Set factors of '1' not including '1'
    var selfFactors = new Array(A.length * 2 + 2).fill(0)
    for (let i = 0; i < A.length; i++) {
        selfFactors[A[i]]++;
    }

    var result = []
    A.forEach((x,i) =>{
        let counter = 0;
        for (let d = 1; d <= Math.sqrt(x); d++) {
            if (x % d === 0) {
                counter += selfFactors[d];
                if (x / d != d) {
                    counter += selfFactors[x / d];
                }
            }
        }
        result[i] = A.length - counter;
        result
    }) 
    return result;
}


let r = solution([3, 1, 2, 3, 6])
r
