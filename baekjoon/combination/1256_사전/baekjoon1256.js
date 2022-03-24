let input = require('fs').readFileSync('dev/stdin.txt').toString().split('\n');

input = input[0].split(' ');
let N = Number(input[0]);
let M = Number(input[1]);
let K = Number(input[2]);
let answer = '';

let dp = Array.from(Array(201), () => new Array(201).fill(0));

const combination = (n, r) => {
    if (n == r || r == 0) return 1;
    if (dp[n][r] != 0) return dp[n][r];

    dp[n][r] = Math.min(1e9, combination(n - 1, r - 1) + combination(n - 1, r));
};

const query = (n, m, k) => {
    if (n + m === 0) return;
    else if (n === 0) {
        answer += 'z';
        query(n - 1, m, k);
    } else if (m === 0) {
        answer += 'a';
        query(n - 1, m, k);
    } else {
        let leftCount = combination(n + m - 1, m);
        if (leftCount >= k) {
            answer += 'a';
            query(n - 1, m, k);
        } else {
            answer += 'z';
            query(n, m - 1, k - leftCount);
        }
    }
};

if (K > combination(N + M, M)) {
    console.log('-1');
} else {
    query(N, M, K);
    console.log(answer);
}
