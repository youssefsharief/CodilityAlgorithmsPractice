const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let k, n;
let t = [];
rl.on('line', function (line) {
    if (!k) {
        const nums = line.split(' ');
        n = parseInt(nums[0]);
        k = parseInt(nums[1]);
    } else {
        t.push(parseInt(line))
        if (n == t.length) {
            rl.close()
        }
    }
});



rl.on('close', function () {
    if (n == 0) {
        console.log(0)
    } else {
        console.log(numberOfRequiredServers(n, k, t))
    }
    process.exit(0);
});

function numberOfRequiredServers(n, k,t) {
    let sum = 0
    let ans = 0
    let arr = new Array(200000).fill(0);
    for (let i = 0; i < n; i++) {
        arr[t[i]]++;
        arr[t[i] + 1000]--;
    }

    for (let i = 0; i < 200000; i++) {
        sum += arr[i];
        ans = Math.max(sum, ans);
    }
    return Math.ceil(ans / k) 
}    

numberOfRequiredServers(3, 2, [1000, 1010, 1999])