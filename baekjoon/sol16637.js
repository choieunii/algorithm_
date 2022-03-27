let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const [N] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
const data = input[0].split('').map((v) => {
    return v.match(/[-+*]/) ? v : Number(v);
});
const solution = (N, data) => {};

solution(N, data);
