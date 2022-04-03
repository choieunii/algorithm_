let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const N = Number(input.shift());
const chu = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
const M = Number(input.shift());
const data = input
    .shift()
    .split(' ')
    .map((v) => Number(v));

const solution = (N, M, chu) => {
    const dp = Array.from(Array(N + 1), () => Array(N + 1).fill(false));

    const dfs = (cnt, weight) => {
        if (cnt > N) return;
        if (dp[cnt][weight]) return;

        dp[cnt][weight] = true;

        dfs(cnt + 1, weight + chu[cnt]);
        dfs(cnt + 1, weight);
        dfs(cnt + 1, Math.abs(weight - chu[cnt]));
    };

    dfs(0, 0);

    let ans = '';
    for (let i = 0; i < M; i++) {
        if (dp[N][data[i]]) {
            ans += 'Y';
        } else {
            ans += 'N';
        }
        ans += ' ';
    }
    return ans;
};

console.log(solution(N, M, chu));
