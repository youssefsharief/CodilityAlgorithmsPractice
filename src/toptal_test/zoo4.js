function solution(A){
    let groups = 0;
    let startPosition = 0;
    for (let j = 1; j < A.length; j++) {
        if(A[j] < A[startPosition]) startPosition = j;
    }
    while(startPosition < A.length - 1) {
        for (let i = startPosition; i < A.length; i++) {
            if (A[i + 1] > A[i]){
                groups++;
                startPosition = i + 1;
                break;
            }
        }
    }
    groups++;
    return groups;
}

let A = [1, 5, 4, 9, 8, 7, 12, 13, 14]
// A = [12, 13, 14, 1, 5, 4, 9, 8, 7]
// A=[4,3,2,6,1]
A = [1, 5, 4, 9, 8, 7, 12, 13, 14,19,18]
A = [1, 5, 4, 9, 8, 7, 12, 13, 14,19,18,16,20]
A = [1, 5, 4, 9, 8, 7, 12, 13, 14,19,18,30]
A = [1, 5, 4, 9, 8, 7, 12, 13, 14,19,18,30,16]

let t = solution(A)
t