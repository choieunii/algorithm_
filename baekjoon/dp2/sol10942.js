let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const N = Number(input.shift());
const data = input.shift().split(' ').map(Number);
const M = Number(input.shift());
const quest = input;

const solution = (N, data, M, quest) => {
    const dp = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

    data.unshift(0);
    for (let i = 1; i <= N; i++) {
        dp[i][i] = 1;
        if (i !== 1 && data[i - 1] === data[i]) {
            dp[i - 1][i] = 1;
        }
    }

    for (let i = 2; i <= N - 1; i++) {
        for (let j = 1; i + j <= N; j++) {
            if (data[j] === data[i + j] && dp[j + 1][i + j - 1] == 1)
                dp[j][i + j] = 1;
        }
    }

    let ans = '';
    for (let i = 0; i < M; i++) {
        const [s, e] = quest[i].split(' ').map(Number);
        ans += dp[s][e] + '\n';
    }
    return ans;
};

console.log(solution(N, data, M, quest));
