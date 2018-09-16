const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    console.log('new data', line)
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
}).on('pause', () => {
  console.log('Readline paused.');
}).on('resume', () => {
  console.log('Readline resumed.');
});

