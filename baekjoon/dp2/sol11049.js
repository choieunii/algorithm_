let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const N = Number(input.shift());
const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const solution = (N, data) => {
    const dp = [];
    for (let i = 0; i < N; i++) {
        dp.push([]);
        for (let j = 0; j < N; j++) {
            dp[i].push(0);
        }
    }
    for (let size = 1; size < N; size++) {
        for (let start = 0; start < N - size; start++) {
            const end = start + size;

            let result = Infinity;
            for (let cut = start; cut < end; cut++) {
                result = Math.min(
                    result,
                    dp[start][cut] +
                        dp[cut + 1][end] +
                        data[start][0] * data[cut][1] * data[end][1]
                );
            }
            dp[start][end] = result;
        }
    }
    console.log(dp[0][N - 1]);
};

solution(N, data);
