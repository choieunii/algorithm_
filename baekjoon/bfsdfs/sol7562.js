let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const [T] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const bfs = (N, start, end) => {
    const visited = Array.from({ length: N + 1 }, () =>
        new Array(N + 1).fill(false)
    );
    const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
    const dy = [1, 2, 2, 1, -1, -2, -2, -1];
    let idx = 0;
    const queue = [{ node: start, cnt: 0 }];

    while (idx < queue.length) {
        const { node, cnt } = queue[idx++];
        const [x, y] = node;
        if (x === end[0] && y === end[1]) {
            console.log(cnt);
            continue;
        }
        for (let i = 0; i < 8; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
            if (visited[nx][ny]) continue;
            visited[nx][ny] = true;
            queue.push({ node: [nx, ny], cnt: cnt + 1 });
        }
    }
};

const solution = (N, start, end) => {
    bfs(N, start, end);
};

for (let i = 0; i < data.length; i = i + 3) {
    const N = data[i][0];
    const start = data[i + 1];
    const end = data[i + 2];

    solution(N, start, end);
}
