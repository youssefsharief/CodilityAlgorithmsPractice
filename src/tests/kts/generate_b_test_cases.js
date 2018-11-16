var fs = require('fs');

function generateTestCase() {
    let numberOfTestCases = 30
    let toWrite = `${numberOfTestCases}
`
    for (let i = 0; i < numberOfTestCases; i++) {
        let numberOfImplications = 3
        let numberOfStatements = 4
        let implicationsPairs = []
        for (let i = 0; i < numberOfImplications; i++) {
            const pair = [Math.floor((Math.random() * numberOfStatements) + 1), Math.floor((Math.random() * numberOfStatements) + 1)]
            implicationsPairs.push(pair)
        }
        implicationsPairs = implicationsPairs.filter(pair => pair[0] !== pair[1])
        implicationsPairs
        numberOfImplications = implicationsPairs.length
        toWrite += `${numberOfStatements} ${numberOfImplications}
`

        implicationsPairs.forEach(pair => {
            toWrite += `${pair[0]} ${pair[1]}
`
        })

    }

    fs.writeFile('input.txt', toWrite, function (err) {
        if (err) console.log(err);
    });


}


generateTestCase()


