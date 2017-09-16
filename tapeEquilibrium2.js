solution = A => {
    const len = A.length;
    let minDiff = Infinity;
    let sumLeft = 0;
    let sumRight = A.reduce((x, y) => x + y, 0);
    let i = 0;
    while (i < len - 1) {
        const el = A[i];
        sumLeft += el;
        sumRight -= el;
        const diff = Math.abs(sumRight - sumLeft);
        if (diff < minDiff) minDiff = diff;
        i++;
    }
    return minDiff;
}