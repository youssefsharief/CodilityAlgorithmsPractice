function plusMinus(arr) {
    let positiveCount = 0
    let negativeCount = 0
    arr.forEach(element => {
       element > 0 ? positiveCount++ : element < 0 ? negativeCount++ : null 
    });
    return [positiveCount/arr.length  , negativeCount / arr.length , (arr.length - (positiveCount + negativeCount)) / arr.length]
}

let r = plusMinus([-4 , 3 ,-9 ,0 ,4 ,1])
r
