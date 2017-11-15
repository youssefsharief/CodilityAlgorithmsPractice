

function solution(A,B){

    let livingUpstreamFishCount = 0
    const livingFishStack = []
    B.forEach((dir,i) => {
        if (dir === 1) livingFishStack.push(A[i])
        if (dir === 0) {
            while (A[i] > livingFishStack[livingFishStack.length - 1]) {
                livingFishStack.pop()
            }
            if (!livingFishStack.length) livingUpstreamFishCount ++  
        } 
    });
    return livingFishStack.length + livingUpstreamFishCount
}


let r = solution( [4,3,2,1,5], [0,1,0,0,0] )
r
r = solution( [1,5,8,7,6,30,11,9,10,25, 22], [1,0,0,0,1,1,1,0,0,1,0] )
r

r = solution( [4,3,2,1,5], [0,0,0,0,0] )
r

r = solution( [4,3,2,1,5], [1,1,1,1,1] )
r

r = solution( [5], [0] )
r

r = solution( [3], [1] )
r

r = solution( [4,5], [0,1] )
r

r = solution( [5,4], [0,1] )
r