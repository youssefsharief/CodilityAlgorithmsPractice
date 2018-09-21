// This is not correct since the right solution would be not to take the one with the most val/weight

const maxWieght = 50
const items = [
    { wt: 10, val: 60 },
    { wt: 20, val: 100 },
    { wt: 30, val: 120 },
]

function solution(arr) {
    arr.sort((a, b) => b.val / b.wt - a.val / a.wt)

    let totalWeightTillNow = 0
    let totalValTillNow = 0

    arr.forEach(item => {
        if (item.wt + totalWeightTillNow <= maxWieght) {
            totalWeightTillNow = totalWeightTillNow + item.wt
            totalValTillNow +=  item.val
        } 
    });
    return totalValTillNow
    
}


let y = solution(items)
y
