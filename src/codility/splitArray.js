function solution(X, A, N) {
    N = A.length;
    let sum = 0
    let seg = 0
    for (var i=0; i<N; i++) {
        if (A[i]==X) {
            sum++;
            seg++;
        } else {
            seg = 0;
        }
    }
    return (A[N-1]!=X || sum>seg) ? (N-sum) : N;
}