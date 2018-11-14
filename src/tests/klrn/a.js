

const t = '2018-03-05T08:00:00Z'
const y = new Date(t)
y

const add = (a, b) => a + b
const isTimeInRange = (time, startDate, endDate) => new Date(time) >= startDate && new Date(time) < endDate


function getBalanceByCategoryInPeriod(transactionsList=[], category, start, end) {
    return transactionsList
        .filter(transaction => transaction.category === category && isTimeInRange(transaction.time, start, end))
        .map(transaction => transaction.amount)
        .reduce(add, 0)
}





module.exports = {
    add, isTimeInRange, getBalanceByCategoryInPeriod
}

// const u = new Date("2018-03-01")
// u
// const v = new Date('2018-03-01T07:30:00Z')
// v
// const bol = u > v
// bol