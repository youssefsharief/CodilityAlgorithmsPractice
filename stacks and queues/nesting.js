function solution(s) {

    const isEven = num => num % 2 === 0
    let stack = []
    const removeFromStack = (i) => {
        if (!stack.length) return 0
        if (isEven(i) === true && stack[stack.length - 1] !== false) return 0
        if (isEven(i) === false && stack[stack.length - 1] !== true) return 0
        else stack.pop()
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(isEven(i))
        }

        else if (s[i] === ')') {
            if (removeFromStack(i) === 0) return 0
        }
    }
    if (stack.length) return 0
    else return 1
}


let y = solution("()")
console.log(y)

y = solution(" ")
console.log(y)

y = solution(")")
console.log(y)

y = solution("(")
y

y = solution("((")
console.log(y)

y = solution("))")
console.log(y)

y = solution(")))")
console.log(y)

y = solution("((()))((()))")
console.log(y)


y = solution("()()(())())))")
console.log(y)

y = solution("(()(())())")
console.log(y)
