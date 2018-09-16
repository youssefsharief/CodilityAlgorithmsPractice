let A = [8, 8, 5, 7, 9, 8, 7, 4, 8]
let B = [1, 2, 3, 3, 2, 1]

// My solution 
function solution(A) {
    let stones = 0
    let currentHeight
    let waitingList = []
    A.forEach((h, i) => {

        while (h < waitingList[waitingList.length - 1]) {
            waitingList.pop()
            if (!waitingList.length) break
        }
        switch (true) {
            case i === 0:
                stones++
                currentHeight = h
                break;

            case h === currentHeight:
                break;

            case h > currentHeight:
                waitingList.push(currentHeight)
                stones++
                currentHeight = h
                break;

            case h < currentHeight:
                currentHeight = h
                stones++
                for (var i = waitingList.length-1; i >= 0; i--) {
                    if (waitingList[i] === h) {
                        stones--
                    }
                    break;
                }
                break;

            default:
                break;

        }

    });
    if (stones === 0) return 1
    return stones

}

var t = solution(A)
t
t = solution(B)
t



// switch (true) {
//     case (h === waitingList[waitingList.length - 1]):
//         currentHeight = h
//         break;
//     case (h < waitingList[waitingList.length - 1]):
//         currentHeight = h
//         waitingList.pop()
//         stones++
//         break;

//     default:
//         break;
// }