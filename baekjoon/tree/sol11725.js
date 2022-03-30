let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const N = Number(input.shift());
const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const dfs = (tree, cur, visited, parents) => {
    visited[cur] = true;
    for (let i of tree[cur]) {
        if (!visited[i]) {
            parents[i] = cur;
            dfs(tree, i, visited, parents);
        }
    }
};
const printParents = (parents) => {
    const ans = parents
        .slice(2, parents.length)
        .reduce((prev, curr) => prev + '\n' + curr);
    console.log(ans);
};

const solution = (N, input) => {
    const tree = Array.from(Array(N + 1), () => []);
    const visited = Array.from(Array(N), () => false);
    const parents = Array.from(Array(N), () => 0);

    for (let i of input) {
        const [n1, n2] = i;
        tree[n1].push(n2);
        tree[n2].push(n1);
    }

    dfs(tree, 1, visited, parents);
    printParents(parents);
};

solution(N, data);
