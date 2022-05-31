let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
const M = Number(input.shift());

const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const solution = (N, M, input) => {
    const parent = new Array(N + 1).fill(0).map((v, i) => i);

    const union = (a, b) => {
        const pa = find(a);
        const pb = find(b);

        if (pa === pb) return;
        if(pa > pb) {
            parent[pa] = pb;
        } else {
            parent[pb] = pa;
        }
    };

    const find = (a) => {
        if (parent[a] === a) return a;
        return (parent[a] = find(parent[a]));
    };

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (input[i][j] !== 1) continue;
            union(i, j);
        }
    }

    const plan = data[data.length - 1];

    let isPossible = true;

    for (let i = 0; i < plan.length - 1; i++) {
        const prevCity = plan[i];
        const city = plan[i + 1];
        const tmp = find(prevCity - 1);
        if (tmp !== find(city - 1)) {
            isPossible = false;
            break;
        }
    }

    if (isPossible) console.log('YES');
    else console.log('NO');
};

solution(N, M, data);