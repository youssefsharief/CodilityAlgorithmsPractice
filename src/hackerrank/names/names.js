process.stdin.resume();
process.stdin.setEncoding('ascii');

let consoleInput = '';
process.stdin.on('data', (data) => {
    if(data === "quit\n"){
        console.log("Inside if");
        done();
    }
    consoleInput += data;
});

process.stdin.on('end', () => {
    consoleInput = consoleInput.split('\n');
    console.log(consoleInput)
});


function done(){
    console.log("Exiting");
    process.exit();
}
    

// const consoleInput = ['code2.gif', 'code4.png', 'code5.jpg']

// consoleInput.forEach(str =>{
//     console.log(str.substr(str.length - 3)+'_'+str.substr(0, str.length-4))
// })


// let currentLine = 0;
// function readLine() {
//     if (currentLine >= consoleInput.length) {
//         return null;
//     }
    
//     return consoleInput[currentLine++];
// }