let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const T = Number(input.shift())

const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const solution = (T, input) => {};

solution(T, data);
