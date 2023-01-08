let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const [N, M] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const solution = (N, M, input) => {
    const graph = {};
    let distance = new Array(10001).fill(0);

    input.forEach((value) => {
        const [start, end, weight] = value;
        if (graph[start]) {
            graph[start].push([end, weight]);
        } else {
            graph[start] = [[end, weight]];
        }
    });

    const dijkstra = (start) => {
        if (start > M) return;
        if (distance[start] + 1 < distance[start + 1]) {
            distance[start + 1] = distance[start] + 1;
        }

        if(!graph[start]) return;

        for (const node of graph[start]) {
            if (distance[start] + node[1] < distance[node[0]]) {
                distance[node[0]] = distance[start] + node[1];
            }
        }
        console.log(distance)
        dijkstra(start+1);
    };

    dijkstra(0);
    console.log(distance[M])
};

solution(N, M, data);
