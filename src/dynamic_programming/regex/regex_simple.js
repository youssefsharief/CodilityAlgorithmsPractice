const string = 'b'
const pattern = 'a*b'

function solution(pattern, string) {
    let isElligible = false
    for (let i = 0; i < string.length; i++) {
        if (string[i] == pattern[i] || pattern[i] == '.') {
            continue
        }  else if (pattern[i] === '*') {
            
        }
        else {
            isElligible = false
        }
    }
    return true
}

const y = solution(pattern, string)
y