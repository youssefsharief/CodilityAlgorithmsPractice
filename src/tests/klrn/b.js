
const transactions = [
    {
        id: 3,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:34:30.000Z'
    },
    {
        id: 1,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:00.000Z'
    },
    {
        id: 6,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 250,
        category: 'other',
        time: '2018-10-02T10:33:05.000Z'
    },
    {
        id: 4,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:36:00.000Z'
    },
    {
        id: 2,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:50.000Z'
    },
    {
        id: 5,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 250,
        category: 'other',
        time: '2018-10-02T10:33:00.000Z'
    }
];

const isTimeDifferenceInRange = (time1, time2) => (Math.abs(new Date(time1) - new Date(time2)) / 60000) < 1
const areSimilarTransactions = (firstTransaction, secondTransaction) =>
    firstTransaction.sourceAccount === secondTransaction.sourceAccount &&
    firstTransaction.targetAccount === secondTransaction.targetAccount &&
    firstTransaction.amount === secondTransaction.amount &&
    firstTransaction.category === secondTransaction.category




function findDuplicateTransactions(transactions = []) {
    // array to be returned
    const duplicates = []
    // Use efficient dynamic programming to record previously checked transactions. 
    // This prevents looping through transactions that were counted as duplicates before.
    const checkedTransactionsIndexes = []
    // Sort all transactions by ascending date.
    transactions.sort((a, b) => new Date(a.time) - new Date(b.time))    
    for (let i = 0; i < transactions.length; i++) {
        // Check only transactions that have not been recorded as duplicated
        if (!checkedTransactionsIndexes[i]) {
            // Initiate a duplicates array for the transaction we are currently checking 
            const innerDuplicates = [transactions[i]]
            innerDuplicates
            // Loop only through transactions with later dates
            for (let j = i + 1; j < transactions.length; j++) {
                // Compare the times of the latest duplicate and and the current transaction in the loop
                if (isTimeDifferenceInRange(innerDuplicates[innerDuplicates.length - 1].time, transactions[j].time)) {
                    if (areSimilarTransactions(transactions[i], transactions[j])) {
                        innerDuplicates.push(transactions[j])
                        checkedTransactionsIndexes[j] = true
                    }
                } else {
                    // Save time by breaking. We are sure that the upcoming transaction's time is not in range
                    break;
                }
            }
            if (innerDuplicates.length > 1) {
                duplicates.push(innerDuplicates)
            }
        }
    }
    return duplicates
}


module.exports = {
    areSimilarTransactions,
    findDuplicateTransactions,
    isTimeDifferenceInRange
}
const r = findDuplicateTransactions(transactions)
console.log(r)