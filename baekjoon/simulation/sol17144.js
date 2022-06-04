let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const [R, C, T] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const solution = (R, C, T, input) => {
    const printArr = (data) => {
        for (let i = 0; i < R; i++) {
            let tmp = '';
            for (let j = 0; j < C; j++) {
                tmp += data[i][j] + ' ';
            }
            console.log(tmp);
        }
    };
    const spreadDust = (data) => {
        const dx = [1, -1, 0, 0];
        const dy = [0, 0, 1, -1];
        const queue = [];

        for (let i = 0; i < R; i++) {
            for (let j = 0; j < C; j++) {
                if (data[i][j] <= 0) continue;
                queue.push([i, j, data[i][j]]);
            }
        }
        while (queue.length) {
            const [i, j, value] = queue.pop();
            let spDust = Math.floor(value / 5);

            for (let sp = 0; sp < 4; sp++) {
                let row = i + dx[sp];
                let col = j + dy[sp];

                if (row < 0 || col < 0 || row >= R || col >= C) continue;
                if (data[row][col] === -1) continue;

                data[row][col] += spDust;
                data[i][j] -= spDust;
            }
        }
    };
    const goCleanTop = (data, i, j, value, endi, endj) => {
        if (i === endi && j === endj) return;
        let tmp = data[i][j];
        data[i][j] = value;

        if (j < C - 1 && i === endi) {
            goCleanTop(data, i, j + 1, tmp, endi, endj);
        } else if (i > 0 && j === C - 1) {
            goCleanTop(data, i - 1, j, tmp, endi, endj);
        } else if (i === 0 && j > 0) {
            goCleanTop(data, i, j - 1, tmp, endi, endj);
        } else if (i < endi && j === endj) {
            goCleanTop(data, i + 1, j, tmp, endi, endj);
        }
    };

    const goCleanDown = (data, i, j, value, endi, endj) => {
        if (i === endi && j === endj) return;

        let tmp = data[i][j];
        data[i][j] = value;

        if (j < C - 1 && i === endi) {
            goCleanDown(data, i, j + 1, tmp, endi, endj);
        } else if (i < R - 1 && j === C - 1) {
            goCleanDown(data, i + 1, j, tmp, endi, endj);
        } else if (i === R - 1 && j > 0) {
            goCleanDown(data, i, j - 1, tmp, endi, endj);
        } else if (i > endi && j === endj) {
            goCleanDown(data, i - 1, j, tmp, endi, endj);
        }
    };

    const startCleanAir = (data) => {
        for (let i = 0; i < R; i++) {
            for (let j = 0; j < C; j++) {
                if (data[i][j] !== -1) continue;
                if (i - 1 >= 0 && data[i - 1][j] === -1) {
                    goCleanDown(data, i, j + 1, 0, i, j);
                } else {
                    goCleanTop(data, i, j + 1, 0, i, j);
                }
            }
        }
    };

    const calcSum = (data) => {
        let sum = 0;
        for (let i = 0; i < R; i++) {
            for (let j = 0; j < C; j++) {
                if (data[i][j] === -1) continue;
                sum += data[i][j];
            }
        }
        return sum;
    };
    while (T-- > 0) {
        spreadDust(input);
        startCleanAir(input);
    }

    console.log(calcSum(input));
};

solution(R, C, T, data);
