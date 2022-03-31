let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const N = Number(input.shift());
const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const solution = (N, data) => {
    if (N === 1) {
        console.log(0);
        return;
    }

    const tree = Array.from(Array(N + 1), () => new Array());
    const visited = new Array(N + 1).fill(false);
    let max = 0;
    let end;

    data.forEach(([n1, n2, dist]) => {
        tree[n1].push({ node: n2, dist });
        tree[n2].push({ node: n1, dist });
    });

    const dfs = (node, curDist = 0) => {
        if (visited[node]) return;
        visited[node] = true;

        if (tree[node].length === 1 && visited[tree[node][0].node]) {
            if (max < curDist) {
                max = curDist;
                end = node;
            }
        }

        for (const child of tree[node]) {
            dfs(child.node, curDist + child.dist);
        }
    };

    dfs(1);
    max = 0;
    for (let i = 1; i <= N; i++) visited[i] = false;
    dfs(end);
    console.log(max);
};

solution(N, data);
