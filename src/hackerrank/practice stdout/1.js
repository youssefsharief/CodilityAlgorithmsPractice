'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = ''
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', () => {
    console.log(inputString)
});
