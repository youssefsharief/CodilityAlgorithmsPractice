

class Solution {
    constructor(entries) {
        this.conversionValues = {}
        this.mentionedBefore = {}
        this.entries = entries
    }

    _aquire(label, smallUnitLabel) {
        if (this.conversionValues[smallUnitLabel]) {
            Object.keys(this.conversionValues[smallUnitLabel]).forEach(tinyLabel => {
                this.conversionValues[label][tinyLabel] = this.conversionValues[smallUnitLabel][tinyLabel] * this.conversionValues[label][smallUnitLabel]
                this.mentionedBefore[tinyLabel] = label
            })
            delete this.conversionValues[smallUnitLabel]
        }
    }

    _entry(largeUnitLabel, smallUnitLabel, value) {
        const smallUnitMentionedIn = this.mentionedBefore[smallUnitLabel]
        const largeUnitMentionedIn = this.mentionedBefore[largeUnitLabel]
        if (largeUnitMentionedIn) {
            const oldValue = this.conversionValues[largeUnitMentionedIn][largeUnitLabel]
            this.conversionValues[largeUnitMentionedIn][smallUnitLabel] = value * oldValue
            this.mentionedBefore[smallUnitLabel] = largeUnitMentionedIn
            this._aquire(largeUnitMentionedIn, smallUnitLabel)
        } else if (smallUnitMentionedIn) {
            const valueInOldStore = this.conversionValues[smallUnitMentionedIn][smallUnitLabel]
            if (valueInOldStore > value) {
                this.conversionValues[smallUnitMentionedIn][largeUnitLabel] = valueInOldStore / value
                this.mentionedBefore[largeUnitLabel] = smallUnitMentionedIn
            } else {
                if (!this.conversionValues[largeUnitLabel]) {
                    this.conversionValues[largeUnitLabel] = {}
                }
                this.conversionValues[largeUnitLabel][smallUnitLabel] = value
                this.conversionValues[largeUnitLabel][smallUnitMentionedIn] = value / valueInOldStore
                this.mentionedBefore[smallUnitLabel] = largeUnitLabel
                this.mentionedBefore[smallUnitMentionedIn] = largeUnitLabel
                this._aquire(largeUnitLabel, smallUnitMentionedIn)
            }
        } else {
            if (!this.conversionValues[largeUnitLabel]) {
                this.conversionValues[largeUnitLabel] = {}
            }
            this.conversionValues[largeUnitLabel][smallUnitLabel] = value
            this.mentionedBefore[smallUnitLabel] = largeUnitLabel
        }
        this._aquire(largeUnitLabel, smallUnitLabel)
    }

    solve() {
        this.entries.forEach(item => {
            this._entry(item.largeUnitLabel, item.smallUnitLabel, item.value)
        })
        this._writeSentence()
    }


    _writeSentence() {
        const biggestLabel = Object.keys(this.conversionValues)[0]
        const biggestUnit = this.conversionValues[biggestLabel]
        let f = Object
            .entries(biggestUnit)
            .sort((a, b) => a[1] - b[1])
        let sentence = `1${biggestLabel} = `
        f.forEach((innerArr, i, arr) => {
            sentence += `${innerArr[1] + innerArr[0].toString()}`
            if (i !== arr.length - 1) {
                sentence += ' = '
            }
        })
        console.log(sentence)
    }


}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let i = 0
let entries = [];
rl.on('line', function (line) {
    if (parseInt(line) === 0) {
        rl.close()
    }
    if (!n) {
        entries = []
        n = parseInt(line)
        i = 0
    } else {
        if (i !== 0) {
            const arr = line.split(' ');
            entries.push({ largeUnitLabel: arr[0], smallUnitLabel: arr[3], value: parseInt(arr[2]) })
            if (entries.length == n - 1) {
                n = null
                const s = new Solution(entries)
                s.solve()
            }
        }
        i++
    }
});
if (process.argv[2]) {
    const fs = require('fs')
    fs.readFile(process.argv[2], 'utf8', (err, data) => {
        if (err) throw err;
        rl.write(data)
    });
}



// const ui = new Solution([
//     { largeUnitLabel: 'B', value: 3, smallUnitLabel: 'C' },
//     { largeUnitLabel: 'C', value: 604800, smallUnitLabel: 'J' },
//     { largeUnitLabel: 'H', value: 90, smallUnitLabel: 'J' },
//     { largeUnitLabel: 'G', value: 8, smallUnitLabel: 'H' },
//     { largeUnitLabel: 'D', value: 210, smallUnitLabel: 'G' },
//     { largeUnitLabel: 'D', value: 30, smallUnitLabel: 'F' },
//     { largeUnitLabel: 'F', value: 504, smallUnitLabel: 'I' },
//     { largeUnitLabel: 'E', value: 3024, smallUnitLabel: 'I' },
//     { largeUnitLabel: 'A', value: 120, smallUnitLabel: 'E' },

// ])

// ui.solve()