

function solution(string, pattern) {
    console.log(string)
    const stringChar = string[string.length - 1]
    const patternChar = pattern[pattern.length - 1]
    if (isMatching(stringChar, patternChar)) {
        const newPattern = pattern.substring(0, pattern.length - 1)
        const newString = string.substring(0, string.length - 1)
        if (newPattern && newString) {
            return solution(newString, newPattern)
        }
    } else if (patternChar === '*') {
        const newPattern = pattern.substring(0, pattern.length )
        const newString = string.substring(0, string.length - 2)
        if (newPattern && newString) {
            return solution(newString, newPattern)
        }
    }
    else {
        return false
    }


    return true
}

function isMatching(stringChar, patternChar) {
    stringChar
    patternChar
    return stringChar == patternChar || patternChar == '.'
}

const string = 'abbbbbbbc'
const pattern = 'ab*c'


let y = solution(string, pattern)
y