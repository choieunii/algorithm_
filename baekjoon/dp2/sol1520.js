let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const [N, M] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const solution = (N, M, data) => {
    const dp = Array.from(Array(N), () => new Array(M).fill(-1));
    const nx = [0, 0, 1, -1];
    const ny = [1, -1, 0, 0];

    const dfs = (x, y) => {
        if (x === N - 1 && y === M - 1) return 1;

        if (dp[x][y] !== -1) return dp[x][y];

        dp[x][y] = 0;
        for (let i = 0; i < 4; i++) {
            let [nextX, nextY] = [x + nx[i], y + ny[i]];

            if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= M) continue;
            if (data[x][y] > data[nextX][nextY]) {
                dp[x][y] += dfs(nextX, nextY);
            }
        }
        return dp[x][y];
    };
    return dfs(0, 0);
};

console.log(solution(N, M, data));
