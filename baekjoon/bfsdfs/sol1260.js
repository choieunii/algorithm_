const bfs = (N, V, data, visit) => {
    const queue = [V];
    visit[V] = false;

    while (queue.length) {
        const node = queue.shift();
        process.stdout.write(String(node) + ' ');

        for (let i = 1; i <= N; i++) {
            if (!visit[i]) continue;
            if (data[node][i] === 0) continue;

            visit[i] = false;
            queue.push(i);
        }
    }
};

const dfs = (N, V, data, visit) => {
    visit[V] = true;
    process.stdout.write(String(V) + ' ');

    for (let i = 1; i <= N; i++) {
        if (visit[i]) continue;
        if (data[V][i] === 0) continue;
        dfs(N, i, data, visit);
    }
};

const solution = (N, M, V, input) => {
    const data = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
    const visited = new Array(N + 1).fill(false);

    input.forEach((v) => {
        const [n1, n2] = v.split(' ');
        data[Number(n1)][Number(n2)] = 1;
        data[Number(n2)][Number(n1)] = 1;
    });

    dfs(N, V, data, visited, []);
    console.log();
    bfs(N, V, data, visited);
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
    let V;
    const data = [];

    for await (const line of rl) {
        if (cnt === 0) {
            [N, M, V] = line.trim().split(' ');
        } else {
            data.push(line);
        }
        cnt++;
        if (M === cnt) rl.close();
    }

    solution(Number(N), Number(M), Number(V), data);
    process.exit();
})();
