const dfs = (N, V, data, visited) => {
    visited[V] = true;

    for (let i = 1; i <= N; i++) {
        if (visited[i]) continue;
        if (data[V][i] === 0) continue;
        dfs(N, i, data, visited);
    }
};

const checkVisited = (visited) => {
    let count = 0;
    for (let i = 2; i <= visited.length; i++) {
        if (visited[i]) count++;
    }
    return count;
};

const solution = (N, M, input) => {
    const data = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
    const visited = new Array(N + 1).fill(false);

    input.forEach((v) => {
        const [n1, n2] = v.split(' ');
        data[Number(n1)][Number(n2)] = 1;
        data[Number(n2)][Number(n1)] = 1;
    });

    dfs(N, 1, data, visited);
    console.log(checkVisited(visited));
};

const readline = require('readline');
const f = require('fs');
var file = './dev/stdin.txt';

(async () => {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    let cnt = 0;
    let N;
    let M;
    const data = [];

    for await (const line of rl) {
        if (cnt === 0) {
            N = line.trim();
        } else if (cnt === 1) {
            M = line.trim();
        } else {
            data.push(line);
        }
        cnt++;
        if (M === cnt) rl.close();
    }

    solution(Number(N), Number(M), data);
    process.exit();
})();
