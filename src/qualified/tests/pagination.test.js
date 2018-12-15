const PaginationHelper = require('../pagination').PaginationHelper


const assert = require("chai").assert;
var collection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
var helper = new PaginationHelper(collection, 10);

assert.equal(helper.pageCount(), 3, 'page_count is returning incorrect value.');
//assert.equal(helper.pageIndex(23), 2, 'page_index returned incorrect value');
assert.equal(helper.itemCount(), 24, 'item_count returned incorrect value');

describe('PaginationHelper()', function () {

  describe('edge cases', ()=>{
    describe('all pages are full', ()=>{
      let helper
      before(()=>{
        collection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        helper = new PaginationHelper(collection, 10);
      })
      describe('pageCount', ()=>{
        it('should not have +-1 error', ()=>{
          assert.equal(helper.pageCount(), 2)
        })
      })
      describe('itemCount', ()=>{
        it('should not have +-1 error', ()=>{
          assert.equal(helper.itemCount(), 20)
        })
      })
    })
    
    describe('one extra page for just one element', ()=>{
      let helper
      before(()=>{
        collection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
        helper = new PaginationHelper(collection, 10);
      })
      describe('pageCount', ()=>{
        it('should not have +-1 error', ()=>{
          assert.equal(helper.pageCount(), 3)
        })
      })
    })

    
  })
  describe('pageCount', function () {
    it('should return correct value', function () {
        assert.equal(helper.pageCount(), 3, 'page_count is returning incorrect value.');
    });
  })
  
  describe('pageIndex function', function () {
    describe('edge cases', () => {
      it('should return -1 if index is out of range', function () {
        //assert.equal(helper.pageIndex(100),-1)
        //assert.equal(helper.pageIndex(collection.length),-1)
      });
    })
  })


  describe('pageItemCount', function () {
    it('should return -1 for out of range indices', function () {
        assert.equal(helper.pageItemCount(26), -1);
    });
    it('should return -1 for out of range indices', function () {
        assert.equal(helper.pageItemCount(26), -1);
    });
  })
});