let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const [M, N, H] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const solution = (N, M, H, data) => {
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < M; j++) {
            for (let k = 0; k < N; k++) {
                data;
            }
        }
    }
};

solution(N, M, H, data);
