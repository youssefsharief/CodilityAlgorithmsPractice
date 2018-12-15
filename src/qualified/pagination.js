// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
    this.itemsPerPage = itemsPerPage
    this.collection = collection
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
    return this.collection.length
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
    return Math.ceil(this.collection.length / this.itemsPerPage)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    if (pageIndex > this.collection.length) {
        return -1
    }
    return this.collection.length / (this.itemsPerPage * (pageIndex + 1))
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
    if (itemIndex >= this.collection.length) {
        return -1
    }
    return Math.ceil(this.collection.length / (itemIndex + 1))
}

module.exports = PaginationHelper