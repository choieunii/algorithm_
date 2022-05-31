let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const N = Number(input.shift());

const solution = (N) => {
    if(N % 2 === 0) console.log("CY");
    else console.log("SK");
};

solution(N);
