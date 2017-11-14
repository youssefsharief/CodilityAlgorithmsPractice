function solution(A) {
    A.sort();
    for (var i = 0; i < A.length;) {
        if(A[i] == A[i + 1]) i = i + 2
        else return A[i]
    }
}

var y = solution([1, 2, 1, 2, 5, 5, -6,-6,3])
y

