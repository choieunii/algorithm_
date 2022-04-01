let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const printTree = (count, treeCnt) => {
    if (treeCnt === 1) {
        return `Case ${count}: There is one tree.`;
    } else if (treeCnt === 0) {
        return `Case ${count}: No trees.`;
    } else {
        return `Case ${count}: A forest of ${treeCnt} trees.`;
    }
};

const solution = (N, data) => {
    const adj = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));
    const visited = Array.from(Array(N + 1), () => false);
    let treeCnt = 0;
    let hasCycle;

    data.forEach(([from, to]) => {
        adj[from][to] = 1;
        adj[to][from] = 1;
    });

    const checkAdj = (before, current) => {
        visited[current] = true;
        for (let next = 1; next <= N; next++) {
            if (adj[current][next] === 0) continue;
            if (next === before) continue;

            if (!visited[next]) {
                checkAdj(current, next);
            } else {
                hasCycle = true;
            }
        }
    };

    for (let i = 1; i <= N; i++) {
        if (visited[i]) continue;
        hasCycle = false;
        checkAdj(0, i);
        if (!hasCycle) treeCnt++;
    }

    return treeCnt;
};

let idx = 0;
let cnt = 1;
while (true) {
    const [N, M] = data[idx++];
    if (N === 0 && M === 0) break;
    const input = data.slice(idx, idx + M);
    idx += M;
    const answer = printTree(cnt++, solution(N, input));
    console.log(answer);
}
