let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const N = Number(input.shift());

const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const solution = (N, input) => {
    input.sort((a,b) => a[0] - b[0]);
    let aSum = 0;
    for (const [,a] of input) {
        aSum += a;
    }
    let cur = 0;
    for (const [x,a] of input) {
        cur += a;
        if(cur >= (aSum+1)/2){
            console.log(x);
            break;
        }
    }
};

solution(N, data);
