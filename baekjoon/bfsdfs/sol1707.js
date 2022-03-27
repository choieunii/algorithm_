let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const K = Number(input.shift());
const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const dfs = (start, graph, color, type) => {
    color[start] = type;
    for (let i = 0; i < graph[start].length; i++) {
        const next = graph[start][i];

        if (color[next] === 0) {
            dfs(next, graph, color, 3 - type);
        }
    }
};

const isBigraph = (graph, color, V) => {
    for (let i = 1; i <= V; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            if (color[i] === color[graph[i][j]]) {
                return false;
            }
        }
    }
    return true;
};
const solution = (V, E, input) => {
    const graph = Array.from({ length: V + 1 }, () => []);
    const color = new Array(V + 1).fill(0);

    for (let i of input) {
        const [from, to] = i;
        graph[from].push(to);
        graph[to].push(from);
    }
    for (let i = 1; i < V + 1; i++) {
        if (color[i] === 0) {
            dfs(i, graph, color, 1);
        }
    }

    return isBigraph(graph, color, V) ? 'YES' : 'NO';
};

for (let i = 0; i < K; i++) {
    const [V, E] = data.shift();
    const input = data.splice(0, E);
    console.log(solution(V, E, input));
}
