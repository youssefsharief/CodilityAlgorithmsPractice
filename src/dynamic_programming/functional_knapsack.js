const maxWieght = 50
const items = [
    { wt: 10, val: 60 },
    { wt: 30, val: 120 },
    { wt: 20, val: 100 },
]

function solution(arr) {
    arr.sort((a, b) => b.val / b.wt - a.val / a.wt)

    let totalWeightTillNow = 0
    let totalValTillNow = 0

    arr.forEach(item => {
        if (item.wt + totalWeightTillNow <= maxWieght) {
            totalWeightTillNow = totalWeightTillNow + item.wt
            totalValTillNow +=  item.val
        } else if (totalWeightTillNow < maxWieght) {
            const partialVal = (maxWieght - totalWeightTillNow) / item.wt * item.val
            totalValTillNow +=  partialVal
        } else {
            return totalValTillNow
        }
    });
    return totalValTillNow
    
}


let y = solution(items)
y



