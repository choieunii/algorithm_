const bfs = (N, M, start, data, visited) => {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const queue = [start];

    while (queue.length) {
        const [X, Y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const tmpx = X + dx[i];
            const tmpy = Y + dy[i];

            if (tmpx < 0 || tmpx > N || tmpy < 0 || tmpy > M) continue;
            if (visited[tmpx][tmpy]) continue;
            if (data[tmpx][tmpy] === 0) continue;

            queue.push([tmpx, tmpy]);
            visited[tmpx][tmpy] = true;
        }
    }

    return;
};
const solution = (N, M, K, input) => {
    const data = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(0));
    const visited = Array.from({ length: N + 1 }, () =>
        new Array(M + 1).fill(false)
    );

    let count = 0;

    for (let i of input) {
        const [X, Y] = i;
        data[Number(X)][Number(Y)] = 1;
    }

    for (let i = 0; i <= N; i++) {
        for (let j = 0; j <= M; j++) {
            if (visited[i][j]) continue;
            if (data[i][j] === 0) continue;

            bfs(N, M, [i, j], data, visited);
            count++;
        }
    }

    return count;
};

const readline = require('readline');
const f = require('fs');
var file = './dev/stdin.txt';

(async () => {
    let rl = readline.createInterface({
        input: f.createReadStream(file),
    });
    let cnt = 0;
    let kcnt = 0;
    let T;
    let N, M, K;
    let data = [];

    for await (const line of rl) {
        cnt++;
        if (cnt === 1) {
            T = Number(line.trim());
        } else {
            if (!K) {
                [N, M, K] = line.trim().split(' ');
                continue;
            }
            if (kcnt < Number(K)) {
                data.push(line.split(' '));
                kcnt++;
            } else {
                const sol = solution(Number(N), Number(M), Number(K), data);
                console.log(sol);
                kcnt = 0;
                data = [];
                [N, M, K] = line.trim().split(' ');
            }
        }
    }
    const sol = solution(Number(N), Number(M), Number(K), data);
    console.log(sol);
    process.exit();
})();
