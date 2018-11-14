const isTimeInRange = require('../a').isTimeInRange
const add = require('../a').add
const getBalanceByCategoryInPeriod = require('../a').getBalanceByCategoryInPeriod


const arr = [
  {
      id: 123,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -30,
      category: 'eating_out',
      time: '2018-03-12T12:34:00Z'
  },
  {
      id: 123,
      sourceAccount: 'the_company',
      targetAccount: 'my_account',
      amount: 10000,
      category: 'gym',
      time: '2018-03-01T08:00:00Z'
  },
  {
      id: 235,
      sourceAccount: 'IBM',
      targetAccount: 'home',
      amount: 437,
      category: 'gym',
      time: '2018-03-05T08:00:00Z'
  },
]

const assert = require("chai").assert;

describe('getBalanceByCategoryInPeriod()', function () {
  describe('isTimeInRange function', function () {
    describe('time is in range', () => {
      it('should return true if time it is shortly after the start date', function () {
        assert.isTrue(isTimeInRange('2018-03-02T08:30:00Z', new Date('2018-03-01'), new Date('2018-03-31')));
      });
      it('should return true if time it is shortly before the end date', function () {
        assert.isTrue(isTimeInRange('2018-03-30T07:30:00Z', new Date('2018-03-01'), new Date('2018-03-31')));
      });
      it('should return true if time it at the same time as the start date', function () {
        assert.isTrue(isTimeInRange('2018-03-01T00:00:00Z', new Date('2018-03-01'), new Date('2018-03-31')));
      });
    })
    describe('time is not in range', () => {
      it('should return false if time it at the same time as the end date', function () {
        assert.isFalse(isTimeInRange('2018-03-28T00:00:00Z', new Date('2018-03-01'), new Date('2018-03-28')));
      });
      it('should return false if time it is shortly before the start date', function () {
        assert.isFalse(isTimeInRange('2018-02-27T07:50:00Z', new Date('2018-03-01'), new Date('2018-03-31')));
      });
    })
  });

  describe('add function', function () {
    it('should return correct number', function () {
      assert.equal(add(3, 5), 8);
    });
  });

  it("returns 0 if there are no transactions", function() {
    assert.equal(
      getBalanceByCategoryInPeriod(
        [],
        "groceries",
        new Date("2018-03-01"),
        new Date("2018-03-31")
      ),
      0
    );
  });

  it("returns the correct amount spent by category in specified month", function() {
    assert.equal(
      getBalanceByCategoryInPeriod(
        [
          {
              id: 123,
              sourceAccount: 'my_account',
              targetAccount: 'coffee_shop',
              amount: -30,
              category: 'eating_out',
              time: '2018-03-12T12:34:00Z'
          },
          {
              id: 123,
              sourceAccount: 'the_company',
              targetAccount: 'my_account',
              amount: 10000,
              category: 'gym',
              time: '2018-03-01T08:00:00Z'
          },
          {
              id: 235,
              sourceAccount: 'IBM',
              targetAccount: 'home',
              amount: 437,
              category: 'gym',
              time: '2018-03-05T08:00:00Z'
          },
        ],
        "gym",
        new Date("2018-03-01"),
        new Date("2018-03-31")
      ),
      10437
    );
  });


  it("returns the correct amount spent by category in period longer then month", function() {
    assert.equal(
      getBalanceByCategoryInPeriod(
        [
          {
              id: 123,
              sourceAccount: 'my_account',
              targetAccount: 'coffee_shop',
              amount: -30,
              category: 'eating_out',
              time: '2018-03-12T12:34:00Z'
          },
          {
              id: 123,
              sourceAccount: 'the_company',
              targetAccount: 'my_account',
              amount: 10000,
              category: 'gym',
              time: '2018-03-01T08:00:00Z'
          },
          {
              id: 235,
              sourceAccount: 'IBM',
              targetAccount: 'home',
              amount: 437,
              category: 'gym',
              time: '2018-03-05T08:00:00Z'
          },
          {
            id: 235,
            sourceAccount: 'IBM',
            targetAccount: 'home',
            amount: -37,
            category: 'gym',
            time: '2018-05-01T08:00:00Z'
        },
        ],
        "gym",
        new Date("2018-03-01"),
        new Date("2018-05-03")
      ),
      10400
    );
  });

  




  it("does not get into consideration transactions that are not in the same date range", function() {
    assert.equal(
      getBalanceByCategoryInPeriod(
        [
          {
              id: 123,
              sourceAccount: 'my_account',
              targetAccount: 'coffee_shop',
              amount: -30,
              category: 'eating_out',
              time: '2018-03-12T12:34:00Z'
          },
          {
              id: 123,
              sourceAccount: 'the_company',
              targetAccount: 'my_account',
              amount: 10000,
              category: 'gym',
              time: '2018-03-01T08:00:00Z'
          },
          {
              id: 235,
              sourceAccount: 'IBM',
              targetAccount: 'home',
              amount: 437,
              category: 'gym',
              time: '2018-04-05T08:00:00Z'
          },
        ],
        "gym",
        new Date("2018-03-01"),
        new Date("2018-03-31")
      ),
      10000
    );
  });
});

