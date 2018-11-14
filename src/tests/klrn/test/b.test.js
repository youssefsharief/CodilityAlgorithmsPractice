const isTimeDifferenceInRange = require('../b').isTimeDifferenceInRange
const areSimilarTransactions = require('../b').areSimilarTransactions
const findDuplicateTransactions = require('../b').findDuplicateTransactions

const assert = require("chai").assert;

describe('findDuplicateTransactions()', () => {
    describe('isTimeDifferenceInRange function', () => {
        describe('time is in range', () => {
            it('should return true if time is the same', () => {
                assert.isTrue(isTimeDifferenceInRange('2018-02-02T08:00:00Z', '2018-02-02T08:00:00Z'));
            });
            it('should return true if time2 is 59 seconds after time1', () => {
                assert.isTrue(isTimeDifferenceInRange('2018-02-02T08:30:00Z', '2018-02-02T08:30:59Z'));
            });
            it('should return true if time1 is 59 seconds after time2', () => {
                assert.isTrue(isTimeDifferenceInRange('2018-02-02T08:30:59Z', '2018-02-02T08:30:00Z'));
            });
        })
        describe('time is not in range', () => {
            it('should return false if time1 is 60 seconds after time2', () => {
                assert.isFalse(isTimeDifferenceInRange('2018-02-02T08:31:00Z', '2018-02-02T08:30:00Z'));
            });
            it('should return false if time2 is 60 seconds after time1', () => {
                assert.isFalse(isTimeDifferenceInRange('2018-02-02T08:30:00Z', '2018-02-02T08:31:00Z'));
            });
            it('should return false if time1 is one day after time2', () => {
                assert.isFalse(isTimeDifferenceInRange('2018-02-03T08:30:00Z', '2018-02-02T08:30:00Z'));
            });
        })
    });
    describe('areSimilarTransactions function', () => {
        it('returns true if transactions are similar', () => {
            assert.isTrue(areSimilarTransactions(
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
                })
            )
        })
        it('returns false if sourceAccount is different', () => {
            assert.isFalse(areSimilarTransactions(
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
                    sourceAccount: 'T',
                    targetAccount: 'B',
                    amount: 100,
                    category: 'eating_out',
                    time: '2018-03-02T10:33:00.000Z'
                })
            )
        })
        it('returns false if targetAccount is different', () => {
            assert.isFalse(areSimilarTransactions(
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
                    targetAccount: 'D',
                    amount: 100,
                    category: 'eating_out',
                    time: '2018-03-02T10:33:00.000Z'
                })
            )
        })
        it('returns false if amount is different', () => {
            assert.isFalse(areSimilarTransactions(
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
                    amount: 103,
                    category: 'eating_out',
                    time: '2018-03-02T10:33:00.000Z'
                })
            )
        })
        it('returns false if amount is different', () => {
            assert.isFalse(areSimilarTransactions(
                {
                    id: 3,
                    sourceAccount: 'A',
                    targetAccount: 'B',
                    amount: 100,
                    category: 'lunch',
                    time: '2018-03-02T10:34:30.000Z'
                },
                {
                    id: 1,
                    sourceAccount: 'A',
                    targetAccount: 'B',
                    amount: 100,
                    category: 'eating_out',
                    time: '2018-03-02T10:33:00.000Z'
                })
            )
        })
    })

    it("returns empty array if there are no transactions", () => {
        assert.deepEqual(findDuplicateTransactions([]), []);
    });

    it("returns list of list of the duplicated transactions sorted by date", () => {
        const input = [
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
                time: '2018-03-02T10:33:05.000Z'
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
                time: '2018-03-02T10:33:00.000Z'
            }
        ]
        const expectedOutput = [
            [
                {
                    id: 1,
                    sourceAccount: "A",
                    targetAccount: "B",
                    amount: 100,
                    category: "eating_out",
                    time: "2018-03-02T10:33:00.000Z"
                },
                {
                    id: 2,
                    sourceAccount: "A",
                    targetAccount: "B",
                    amount: 100,
                    category: "eating_out",
                    time: "2018-03-02T10:33:50.000Z"
                },
                {
                    id: 3,
                    sourceAccount: "A",
                    targetAccount: "B",
                    amount: 100,
                    category: "eating_out",
                    time: "2018-03-02T10:34:30.000Z"
                }
            ],
            [
                {
                    id: 5,
                    sourceAccount: "A",
                    targetAccount: "C",
                    amount: 250,
                    category: "other",
                    time: "2018-03-02T10:33:00.000Z"
                },
                {
                    id: 6,
                    sourceAccount: "A",
                    targetAccount: "C",
                    amount: 250,
                    category: "other",
                    time: "2018-03-02T10:33:05.000Z"
                }
            ]
        ]
        assert.deepEqual(findDuplicateTransactions(input), expectedOutput);
    })


    it("returns list of list of the duplicated transactions sorted by date if nearby times are at the end of the array", () => {
        const input = [
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
        ]
        const expectedOutput = [
            [
                {
                    id: 1,
                    sourceAccount: "A",
                    targetAccount: "B",
                    amount: 100,
                    category: "eating_out",
                    time: "2018-03-02T10:33:00.000Z"
                },
                {
                    id: 2,
                    sourceAccount: "A",
                    targetAccount: "B",
                    amount: 100,
                    category: "eating_out",
                    time: "2018-03-02T10:33:50.000Z"
                },
                {
                    id: 3,
                    sourceAccount: "A",
                    targetAccount: "B",
                    amount: 100,
                    category: "eating_out",
                    time: "2018-03-02T10:34:30.000Z"
                }
            ],
            [
                {
                    id: 5,
                    sourceAccount: 'A',
                    targetAccount: 'C',
                    amount: 250,
                    category: 'other',
                    time: '2018-10-02T10:33:00.000Z'
                },
                {
                    id: 6,
                    sourceAccount: 'A',
                    targetAccount: 'C',
                    amount: 250,
                    category: 'other',
                    time: '2018-10-02T10:33:05.000Z'
                },
            ]
        ]
        assert.deepEqual(findDuplicateTransactions(input), expectedOutput);
    })
});

