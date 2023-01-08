let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const [N, C] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
const T = Number(input.shift());
const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const solution = (N, C, T, input) => {
    let answer = 0;
    let weights = new Array(N + 1).fill(0);
    const data = input.sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        if (a[0] !== b[0]) return a[0] - b[0];
    });

    for (const [from, to, weight] of data) {
        let maxTruck = 0;
        for (let i = from; i < to; i++) {
            maxTruck = Math.max(weights[i], maxTruck);
        }
        let capacity = Math.min(weight, C - maxTruck);

        for (let i = from; i < to; i++) {
            weights[i] += capacity;
        }
        answer += capacity;
    }
    console.log(answer);
};

solution(N, C, T, data);

// 보내는 마을 번호, 받는 마을 번호, 보낼 박스 개수
// 트럭에는 MAX 존재
// 마을 수 N, 트럭의 용량 C

