function isBeutiful(input) {
    const strings = input.split("\n")
    strings.forEach(str => {
        console.log(str[0] === str[str.length-1] ? 'True': 'False')
    });
}

isBeutiful('abababababa\nab\naaaab')

console.log('aaaaaa')