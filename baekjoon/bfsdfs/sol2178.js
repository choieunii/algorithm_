const bfs = (N, M, data, visited) => {
    const queue = [[0, 0]];
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    while (queue.length) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const tmpx = x + dx[i];
            const tmpy = y + dy[i];
            if (tmpx < 0 || tmpx >= N || tmpy < 0 || tmpy >= M) continue;
            if (visited[tmpx][tmpy]) continue;
            if (data[tmpx][tmpy] === '0') continue;
            data[tmpx][tmpy] = Number(data[x][y]) + 1;
            queue.push([tmpx, tmpy]);
            visited[tmpx][tmpy] = true;
        }
    }

    console.log(data[N - 1][M - 1]);
};

const solution = (N, M, data) => {
    const visited = Array.from({ length: N + 1 }, () =>
        new Array(M + 1).fill(false)
    );

    bfs(N, M, data, visited);
};

const readline = require('readline');
const f = require('fs');
var file = './dev/stdin.txt';

(async () => {
    let rl = readline.createInterface({
        input: f.createReadStream(file),
    });
    let cnt = 0;
    let N, M;
    const data = [];

    for await (const line of rl) {
        if (cnt === 0) {
            [N, M] = line.trim().split(' ');
        } else {
            data.push(line.trim().split(''));
        }
        cnt++;
        if (N === cnt) rl.close();
    }

    solution(Number(N), Number(M), data);
    process.exit();
})();
