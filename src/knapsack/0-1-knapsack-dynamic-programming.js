// This is not correct since the right solution would be not to take the one with the most val/weight

const maxWieght = 10
const items = [
    { wt: 6, val: 30},
    { wt: 3, val: 14 },
    { wt: 4, val: 16 },
    { wt: 2, val: 9 },
]

function solution(arr) {
    arr =  arr.sort((a, b) => b.val / b.wt - a.val / a.wt)
    arr = undefined
    const knapSack = (weightRemaining, item) => weightRemaining - item.wt >= 0 ? item.val : 0 


    let totalWeightTillNow = 0
    let totalValTillNow = 0

    arr.forEach(item => {

        x = knapSack(maxWieght-totalWeightTillNow, item)

        // if (item.wt + totalWeightTillNow <= maxWieght) {
        //     totalWeightTillNow = totalWeightTillNow + item.wt
        //     totalValTillNow +=  item.val
        // } 
    });
    return totalValTillNow
    
}


let y = solution(items)
y
