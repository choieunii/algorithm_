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
            if (input[tmpx][tmpy] !== '0') continue;

            input[tmpx][tmpy] = Number(input[x][y]) + 1;
            queue.push([tmpx, tmpy]);
        }
    }
};

const checkTomato = (N, M, input) => {
    let max = Number.MIN_VALUE;

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (input[i][j] === '0') {
                console.log(-1);
                return;
            }
            max = Math.max(Number(input[i][j]), max);
        }
    }
    console.log(max - 1);
};
const solution = (N, M, input) => {
    const start = [];
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (input[i][j] === '1') start.push([i, j]);
        }
    }

    bfs(start, N, M, input);
    checkTomato(N, M, input);
};

const readline = require('readline');
const f = require('fs');
var file = './dev/stdin.txt';

(async () => {
    let rl = readline.createInterface({
        input: f.createReadStream(file),
    });
    let cnt = 0;
    let N;
    let M;
    const data = [];

    for await (const line of rl) {
        if (cnt === 0) {
            [N, M] = line.trim().split(' ');
        } else {
            data.push(line.trim().split(' '));
        }
        cnt++;
        if (M === cnt) rl.close();
    }

    solution(Number(N), Number(M), data);
    process.exit();
})();
