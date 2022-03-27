let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const [N, M] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
const data = input.map((a) => a.split('').map((v) => Number(v)));

const bfs = (start, N, M, data, visited) => {
    const queue = [{ x: start[0], y: start[1], dist: 0, bCnt: 0 }];
    let min = Number.MAX_VALUE;

    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    let idx = 0;

    while (idx < queue.length) {
        const { x, y, dist, bCnt } = queue[idx++];

        if (x === N - 1 && y === M - 1) {
            min = dist + 1;
            break;
        }

        for (let i = 0; i < 4; i++) {
            const curx = x + dx[i];
            const cury = y + dy[i];

            if (curx < 0 || curx >= N || cury < 0 || cury >= M) continue;
            if (data[curx][cury] === 1) {
                if (bCnt === 1 || visited[1][curx][cury]) continue;
                queue.push({
                    x: curx,
                    y: cury,
                    dist: dist + 1,
                    bCnt: 1,
                });
                visited[1][curx][cury] = true;
            } else {
                if (visited[bCnt][curx][cury]) continue;
                queue.push({
                    x: curx,
                    y: cury,
                    dist: dist + 1,
                    bCnt: bCnt,
                });
                visited[bCnt][curx][cury] = true;
            }
        }
    }
    return min;
};

const solution = (N, M, data) => {
    const visited = Array.from({ length: 2 }, () =>
        Array.from({ length: N }, () => new Array(M).fill(false))
    );

    const min = bfs([0, 0], N, M, data, visited);

    if (min === Number.MAX_VALUE) {
        console.log(-1);
    } else {
        console.log(min);
    }
};

solution(N, M, data);
