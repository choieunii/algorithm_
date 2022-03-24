let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const [N, M] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const bfs = (start, N, M, input) => {
    const queue = start;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    let idx = 0;

    while (idx < queue.length) {
        const [x, y] = queue[idx++];

        for (let i = 0; i < 4; i++) {
            const tmpx = x + dx[i];
            const tmpy = y + dy[i];

            if (tmpx < 0 || tmpy < 0 || tmpx >= M || tmpy >= N) continue;
            if (input[tmpx][tmpy] !== 0) continue;

            input[tmpx][tmpy] = input[x][y] + 1;
            queue.push([tmpx, tmpy]);
        }
    }
};

const checkTomato = (N, M, input) => {
    let max = Number.MIN_VALUE;

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (input[i][j] === 0) {
                console.log(-1);
                return;
            }
            max = Math.max(input[i][j], max);
        }
    }
    console.log(max - 1);
};
const solution = (N, M, input) => {
    const start = [];
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (input[i][j] === 1) start.push([i, j]);
        }
    }

    bfs(start, N, M, input);
    checkTomato(N, M, input);
};

solution(N, M, data);
