function solution(s) {

    const isEven = num => num % 2 === 0
    let log = {
        '{': [],
        '[': [],
        '(': []
    }
    const removeFromStack = (item, i) => {
        if (!log[item].length) return 0
        if (isEven(i) === true && log[item][log[item].length - 1] !== false) return 0
        if (isEven(i) === false && log[item][log[item].length - 1] !== true) return 0
        else log[item].pop()
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
            log[s[i]].push(isEven(i))
        }

        else if (s[i] === '}') {
            if (removeFromStack('{', i) === 0) return 0
        }
        else if (s[i] === ']') {
            if (removeFromStack('[', i) === 0) return 0
        }
        else if (s[i] === ')') {
            if (removeFromStack('(', i) === 0) return 0
        }
    }
    if (log['{'].length || log['['].length || log['('].length) return 0
    else return 1
}

let y = solution("()")
console.log(y)

y = solution("())(()")
console.log(y)

y = solution("({{({}[]{})}}[]{})")
console.log(y)

y = solution("([)()]")
y

y = solution("()[{()}()]")
console.log(y)

y = solution("{{{{")
console.log(y)

