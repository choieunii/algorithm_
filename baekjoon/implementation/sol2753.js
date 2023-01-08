let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const N = Number(input.shift());

const solution = (N) => {
    if ((N % 4 === 0 && N % 100 !== 0) || N % 400 === 0) {
        console.log(1);
    }else{
        console.log(0);
    }
};

solution(N);
