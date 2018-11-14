
function solution(string, pattern){
    console.log(pattern.length)
    const dp2DArr = [[]]
    console.log(dp2DArr)
    dp2DArr[0][0] = true
    for (let i = 1; i < string.length; i++) {
        dp2DArr[i] = []
        dp2DArr
        for (let j = 1; j < pattern.length; j++) {
            dp2DArr[i] = []
            if (string[i] == pattern[i] || pattern[i] == '.') {
                console.log('a')
                dp2DArr[i,j] = dp2DArr[i-1,j-1]
            } else {
                dp2DArr[i,j] = false
            }
            
        }
        
    }
    dp2DArr
}

const y = solution("aab", "aba")
y
