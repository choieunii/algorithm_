let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const [N, M, H] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));

const bfs = (data, queue) => {
    const dz = [1, -1, 0, 0, 0, 0];
    const dy = [0, 0, -1, 1, 0, 0];
    const dx = [0, 0, 0, 0, -1, 1];

    let idx = 0;

    while (idx < queue.length) {
        const [x, y, z] = queue[idx++];

        for (let i = 0; i < 6; i++) {
            let [nx, ny, nz] = [x + dx[i], y + dy[i], z + dz[i]];

            if (nx < 0 || ny < 0 || nz < 0 || nx >= M || ny >= N || nz >= H) {
                continue;
            }

            if (data[nz][nx][ny] == 0) {
                data[nz][nx][ny] = data[z][x][y] + 1;
                queue.push([nx, ny, nz]);
            }
        }
    }
};

const checkTomato = (data) => {
    let max = Number.MIN_VALUE;

    for (let i of data) {
        for (let j of i) {
            for (let num of j) {
                if (num === 0) return -1;
                if (max < num) max = num;
            }
        }
    }
    return max - 1;
};

const solution = (N, M, H, input) => {
    const data = Array.from(Array(H + 1), () => []);
    // new Array() 로 선언 시 각 index가 같은 값을 참조
    // data[0]에 할당한 값이 data[1]에도 할당 됨
    const queue = [];

    for (let i = 0; i < H; i++) {
        const splice = input.splice(0, M);
        for (let j = 0; j < M; j++) {
            const tmp = splice[j].split(' ').map((v) => Number(v));
            data[i].push(tmp);
            for (let k = 0; k < N; k++) {
                if (tmp[k] == 1) {
                    queue.push([j, k, i]);
                }
            }
        }
    }
    bfs(data, queue);
    console.log(checkTomato(data));
};

solution(N, M, H, input);
