
// Not my solution
function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)

    var newArr = [],
        i,
        cnt = 0,
        op = 0;

    for (i = 0; i < A.length; i++) {
        newArr.push({
            value: i - A[i],
            type: 0
        });
        newArr.push({
            value: i + A[i],
            type: 1
        });
    }

    newArr.sort(function (a, b) {
        var diff = a.value - b.value;
        if (0 === diff) {
            diff = a.type - b.type;
        }
        return diff;
    });
    for (i = 0; i < newArr.length; i++) {
        if (0 === newArr[i].type) {
            cnt += op;
            op++
        } else {
            op--;
        }
    }
    return cnt > 10000000 ? -1 : cnt;
}

var t = solution([1,5,8,6,5,4,1,2,2,5])
t
