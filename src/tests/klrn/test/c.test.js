
// const assert = require("chai").assert;

// describe('findDuplicateTransactions()', () => {
//     it("returns list of list of the duplicated transactions sorted by date", () => {
//         const input = [
//             {
//                 id: 3,
//                 sourceAccount: 'A',
//                 targetAccount: 'B',
//                 amount: 100,
//                 category: 'eating_out',
//                 time: '2018-03-02T10:34:30.000Z'
//             },
//             {
//                 id: 1,
//                 sourceAccount: 'A',
//                 targetAccount: 'B',
//                 amount: 100,
//                 category: 'eating_out',
//                 time: '2018-03-02T10:33:00.000Z'
//             },
//             {
//                 id: 6,
//                 sourceAccount: 'A',
//                 targetAccount: 'C',
//                 amount: 250,
//                 category: 'other',
//                 time: '2018-03-02T10:33:05.000Z'
//             },
//             {
//                 id: 4,
//                 sourceAccount: 'A',
//                 targetAccount: 'B',
//                 amount: 100,
//                 category: 'eating_out',
//                 time: '2018-03-02T10:36:00.000Z'
//             },
//             {
//                 id: 2,
//                 sourceAccount: 'A',
//                 targetAccount: 'B',
//                 amount: 100,
//                 category: 'eating_out',
//                 time: '2018-03-02T10:33:50.000Z'
//             },
//             {
//                 id: 5,
//                 sourceAccount: 'A',
//                 targetAccount: 'C',
//                 amount: 250,
//                 category: 'other',
//                 time: '2018-03-02T10:33:00.000Z'
//             }
//         ]
//         const expectedOutput = [
//             {
//                 id: 3,
//                 sourceAccount: 'A',
//                 targetAccount: 'B',
//                 amount: 100,
//                 category: 'eating_out',
//                 time: '2018-03-02T10:34:30.000Z'
//             },
//             {
//                 id: 1,
//                 sourceAccount: 'A',
//                 targetAccount: 'B',
//                 amount: 100,
//                 category: 'eating_out',
//                 time: '2018-03-02T10:33:00.000Z'
//             },
//             {
//                 id: 6,
//                 sourceAccount: 'A',
//                 targetAccount: 'C',
//                 amount: 250,
//                 category: 'other',
//                 time: '2018-03-02T10:33:05.000Z'
//             },
//             {
//                 id: 4,
//                 sourceAccount: 'A',
//                 targetAccount: 'B',
//                 amount: 100,
//                 category: 'eating_out',
//                 time: '2018-03-02T10:36:00.000Z'
//             },
//             {
//                 id: 2,
//                 sourceAccount: 'A',
//                 targetAccount: 'B',
//                 amount: 100,
//                 category: 'eating_out',
//                 time: '2018-03-02T10:33:50.000Z'
//             },
//             // {
//             //     id: 5,
//             //     sourceAccount: 'A',
//             //     targetAccount: 'C',
//             //     amount: 250,
//             //     category: 'other',
//             //     time: '2018-03-02T10:33:00.000Z'
//             // }
//         ]
//         assert.deepEqual(input, expectedOutput);
//     })
// });

