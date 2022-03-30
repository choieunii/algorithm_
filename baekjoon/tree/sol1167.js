let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const N = Number(input.shift());
const data = input.map((a) => a.split(' ').map((v) => Number(v)));
let [max, end] = [0, 0];

const dfs = (tree, node, dist, visited) => {
    if (max < dist) {
        max = dist;
        end = node;
    }
    visited[node] = true;
    for (let t of tree[node]) {
        if (visited[t.node]) continue;
        dfs(tree, t.node, dist + t.dist, visited);
    }
};

const solution = (N, input) => {
    const tree = Array.from(Array(N + 1), () => []);
    let visited = new Array(N + 1).fill(false);

    for (let i = 0; i < input.length; i++) {
        for (let j = 1; j < input[i].length - 1; j += 2) {
            const [node1, node2] = [input[i][0], input[i][j]];
            const dist = input[i][j + 1];
            tree[node1].push({ node: node2, dist: dist });
            tree[node2].push({ node: node1, dist: dist });
        }
    }

    dfs(tree, 1, 0, visited);
    visited = new Array(N + 1).fill(false);
    max = 0;
    dfs(tree, end, 0, visited);
    console.log(max);
};

solution(N, data);
