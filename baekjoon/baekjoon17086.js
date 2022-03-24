const solution = (N, M, input) => {
    let queue = [];
    let dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    let dy = [-1, 0, 1, -1, 1, -1, 0, 1];
    let answer = Number.MIN_VALUE;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            input[i][j] = Number(input[i][j]);
            if (input[i][j] === 1) queue.push([i, j]);
        }
    }

    while (queue.length) {
        let [x, y] = queue.shift();
        for (let i = 0; i < 8; i++) {
            let curX = x + dx[i];
            let curY = y + dy[i];
            if (curX < 0 || curX >= N || curY < 0 || curY >= M) continue;
            if (input[curX][curY] === 0) {
                queue.push([curX, curY]);
                input[curX][curY] = input[x][y] + 1;
                answer = Math.max(answer, input[curX][curY]);
            }
        }
    }
    console.log(answer - 1);
};

const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    let N = null;
    let M = null;
    let count = 0;
    const data = [];

    for await (const line of rl) {
        if (!N) {
            [N, M] = line.trim().split(' ');
        } else {
            data.push(line.trim().split(' '));
            count += 1;
        }
        if (N == count) {
            rl.close();
        }
    }

    solution(Number(N), Number(M), data);
    process.exit();
})();
