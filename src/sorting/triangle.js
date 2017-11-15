function solution(A) {
    // Use "some" to find if an two points are larger than their consecutive point
    return A.length < 3 ? 0 : A.sort((a, b) => a - b).some((num, i, self) => (num + self[i + 1]) > self[i + 2]) * 1


}


var t = solution([1, 2, 3, 5, 2, 2, 2, 2, 2, 1, 3, 3, 6])
t


