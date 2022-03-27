const solution = (H, W, X, Y, input) => {
    let A = Array.from({ length: W }, () => new Array(H).fill(0));
    let B = [];

    for (let i = 0; i < input.length; i++) {
        B.push(input[i].trim().split(' '));
    }

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (i - X >= 0 && j - Y >= 0) {
                A[i][j] = B[i][j] * 1 - A[i - X][j - Y] * 1;
            } else {
                A[i][j] = B[i][j];
            }
        }
    }

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (i - X >= 0 && j - Y >= 0) {
                A[i][j] = B[i][j] * 1 - A[i - X][j - Y] * 1;
            } else {
                A[i][j] = B[i][j];
            }
        }
    }

    for (let i = 0; i < H; i++) {
        let str = '';
        for (let j = 0; j < W; j++) {
            str += String(A[i][j]) + ' ';
        }
        console.log(str);
    }
};

const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    let H, W, X, Y;
    let N = null;
    let count = 0;
    const data = [];

    for await (const line of rl) {
        if (!N) {
            [H, W, X, Y] = line.trim().split(' ');
            N = Number(H) + Number(X);
        } else {
            data.push(line);
            count += 1;
        }
        if (N === count) {
            rl.close();
        }
    }

    solution(Number(H), Number(W), Number(X), Number(Y), data);
    process.exit();
})();
