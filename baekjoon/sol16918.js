const solution = (R, C, N, input) => {
    let time = Array.from({ length: 200 }, () => new Array(200).fill(0));

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            console.log(input);
            if (input[i][j] === 'O') {
                time[i][j] = 3;
            }
        }
    }

    let t = 2;
    while (true) {
        if (t == N + 1) break;
        if (t % 2 == 0) {
            for (let i = 0; i < R; i++) {
                for (let j = 0; j < C; j++) {
                    if (input[i][j] == 'O') continue;
                    input[i][j] = 'O';
                    Boom_Time[i][j] = t + 3;
                }
            }
        } else {
            for (let i = 0; i < R; i++) {
                for (let j = 0; j < C; j++) {
                    if (time[i][j] !== t) continue;
                    for (let k = 0; k < 4; k++) {
                        let nx = i + dx[k];
                        let ny = j + dy[k];

                        if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
                        if (input[nx][ny] == '.') continue;

                        input[nx][ny] = '.';
                    }
                    input[i][j] = '.';
                    time[i][j] = 0;
                }
            }
        }
        t++;
    }

    for (let i = 0; i < R; i++) {
        let str = '';
        for (let j = 0; j < C; j++) {
            str += input[i][j];
        }
        console.log(str);
    }
};

const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    let R = null;
    let C = null;
    let N = null;
    let count = 0;
    const data = [];

    for await (const line of rl) {
        if (!N) {
            [R, C, N] = line.trim().split(' ');
        } else {
            data.push(line.trim().split(''));
            count += 1;
        }
        if (2 == count) {
            rl.close();
        }
    }

    solution(Number(R), Number(C), Number(N), data);
    process.exit();
})();
