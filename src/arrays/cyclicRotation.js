function solution(A, K) {
    // edge cases
    if (K === 0) return A;
    if (A.length === 1) return A
    if (K > A.length) K = K % A.length;
    const seperationIndex = A.length - K;
    const lastPortion = A.slice(-K);
    const firstPortion = A.slice(0, seperationIndex);
    return lastPortion.concat(firstPortion);
}

const A = [3, 8, 9, 7, 6];
let t = solution(A, 8)
t