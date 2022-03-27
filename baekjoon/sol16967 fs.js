const line = require('fs').readFileSync('../dev/stdin.txt', 'utf8');

let input = line.trim().split('\n');

let [H, W, X, Y] = input[0].split(' ');
let A = Array.from({ length: W }, () => new Array(H).fill(0));
let B = [];

for (let i = 1; i < input.length; i++) {
    B.push(input[i].trim().split(' '));
}

for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
        if (i - X >= 0 && j - Y >= 0) {
            A[i][j] = B[i][j] - A[i - X][j - Y];
        } else {
            A[i][j] = B[i][j];
        }
    }
}

for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
        if (i - X >= 0 && j - Y >= 0) {
            A[i][j] = B[i][j] - A[i - X][j - Y];
        } else {
            A[i][j] = B[i][j];
        }
    }
}

for (let i = 0; i < H; i++) {
    let str = '';
    for (let j = 0; j < W; j++) {
        str += A[i][j] + ' ';
    }
    console.log(str);
}
