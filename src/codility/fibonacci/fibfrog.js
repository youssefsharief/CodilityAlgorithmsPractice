

const getMaxIndexInArr = (A) => A.reduce((acc, x) => Math.max(acc, x), 0)


function getIndexOfLatest1(arr){
    for (var i = arr.length-1; i > 0; i--) {
        if (arr[i] === 1) return i
        
    }
}


