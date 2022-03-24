const bfs = (start, data, visited) => {
    const queue = [start];
    visited[start[0]][start[1]] = true;
    let count = 0;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    while (queue.length) {
        const [x, y] = queue.shift();
        count++;
        for (let i = 0; i < 4; i++) {
            const tmpx = x + dx[i];
            const tmpy = y + dy[i];

            if (
                tmpx < 0 ||
                tmpy < 0 ||
                tmpx >= data.length ||
                tmpy >= data.length
            )
                continue;
            if (visited[tmpx][tmpy]) continue;
            if (data[tmpx][tmpy] === '0') continue;

            queue.push([tmpx, tmpy]);
            visited[tmpx][tmpy] = true;
        }
    }

    return count;
};

const solution = (N, input) => {
    const data = [];
    const visited = Array.from({ length: N + 1 }, () =>
        new Array(N + 1).fill(false)
    );

    const ans = [];

    for (let i of input) {
        const splitI = i.split('');
        data.push(splitI);
    }

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (visited[i][j]) continue;

            if (data[i][j] === '0') continue;

            ans.push(bfs([i, j], data, visited));
        }
    }
    console.log(ans.length);
    ans.sort((a, b) => a - b);
    console.log(ans.join('\n'));
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
    const data = [];

    for await (const line of rl) {
        if (cnt === 0) {
            N = line.trim();
        } else {
            data.push(line);
        }
        cnt++;
        if (N === cnt) rl.close();
    }

    solution(Number(N), data);
    process.exit();
})();
