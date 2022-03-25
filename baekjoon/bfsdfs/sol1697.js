let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const [N, K] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));

const solution = (N, K) => {
    const visited = new Array(100001).fill(false);
    const queue = [{ loc: N, time: 0 }];
    let idx = 0;

    while (idx < queue.length) {
        const cur = queue[idx++];

        if (cur.loc === K) {
            console.log(cur.time);
            break;
        }

        if (cur.loc - 1 >= 0 && !visited[cur.loc - 1]) {
            visited[cur.loc - 1] = true;
            queue.push({ loc: cur.loc - 1, time: cur.time + 1 });
        }
        if (cur.loc + 1 <= 100000 && !visited[cur.loc + 1]) {
            visited[cur.loc + 1] = true;
            queue.push({ loc: cur.loc + 1, time: cur.time + 1 });
        }
        if (cur.loc * 2 <= 100000 && !visited[cur.loc * 2]) {
            visited[cur.loc * 2] = true;
            queue.push({ loc: cur.loc * 2, time: cur.time + 1 });
        }
    }
};

solution(N, K);
