let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const T = Number(input.shift());
const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const solution = (T, data) => {
    for (let t = 0; t <= T; t = t + 2) {
        const K = data[t][0];
        const cost = data[t + 1];
        const dp = Array.from(Array(K + 1), () => new Array(K + 1).fill(0));
        const sum = new Array(K + 1).fill(0);

        sum[0] = cost[0];
        for (let i = 1; i <= K; i++) {
            sum[i] = sum[i - 1] + cost[i - 1];
        }

        for (let i = 1; i < K; i++) {
            for (let j = 1; i + j <= K; j++) {
                dp[j][i + j] = Number.MAX_VALUE;
                for (let k = j; k < i + j; k++) {
                    let tmp =
                        dp[j][k] + dp[k + 1][i + j] + sum[i + j] - sum[j - 1];
                    dp[j][i + j] = Math.min(dp[j][i + j], tmp);
                }
            }
        }
        console.log(dp[1][K]);
    }
};

// const solve = (K, cost, sum) => {
//     let ret = Infinity;

//     const dp = (a, b) => {
//         if (a === b) return cost[a];

//         ret = Infinity;
//         let total = sum[b + 1] - sum[a];

//         for (let i = a; i < b; i++) {
//             ret = Math.min(ret, dp(a, i) + dp(i + 1, b) + total);
//         }
//         return ret;
//     };

//     for (let i = 0; i <= K - 1; i++) {
//         ret = Math.min(ret, dp(0, i) + dp(i + 1, K - 1));
//     }

//     console.log(ret);
// };

// const solution = (T, data) => {
//     for (let t = 0; t <= T; t = t + 2) {
//         const K = data[t][0];
//         const cost = data[t + 1];
//         const sum = new Array(K + 1).fill(0);

//         sum[0] = cost[0];
//         for (let i = 1; i <= K; i++) {
//             sum[i] = sum[i - 1] + cost[i - 1];
//         }
//         solve(K, cost, sum);
//     }
// };

solution(T, data);
