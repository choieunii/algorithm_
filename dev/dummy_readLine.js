const solution = (N, M, input) => {};

const readline = require('readline');
const f = require('fs');
var file = './dev/stdin.txt';

(async () => {
    let rl = readline.createInterface({
        input: f.createReadStream(file),
        // input: process.stdin,
        // output: process.stdout,
    });
    let cnt = 0;
    let N;
    let M;
    const data = [];

    for await (const line of rl) {
        if (cnt === 0) {
            [N, M] = line.trim().split(' ');
        } else {
            data.push(line.trim().split(' '));
        }
        cnt++;
        if (M === cnt) rl.close();
    }

    solution(Number(N), Number(M), data);
    process.exit();
})();
