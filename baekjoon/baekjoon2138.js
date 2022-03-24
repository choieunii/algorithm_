const solution = (N, input) => {
    let A = input[0].split('');
    let B = input[1].split('');

    const change = (A, i) => {
        A[i] = 1 - A[i];
        A[i + 1] = 1 - A[i + 1];
        if (i + 2 <= N - 1) {
            A[i + 2] = 1 - A[i + 2];
        }
    };

    let tmpArr = new Array(N);

    for (let i = 0; i < N; i++) {
        tmpArr[i] = A[i];
    }

    let cnt1 = 1;
    A[0] = 1 - A[0];
    A[1] = 1 - A[1];

    for (let i = 1; i < N; i++) {
        if (A[i - 1] != B[i - 1]) {
            cnt1++;
            change(A, i - 1);
        }
    }

    let first = true;
    for (let i = 0; i < N; i++) {
        if (A[i] != B[i]) {
            first = false;
        }
    }

    let cnt2 = 0;
    for (let i = 1; i < N; i++) {
        if (tmpArr[i - 1] != B[i - 1]) {
            cnt2++;
            change(tmpArr, i - 1);
        }
    }
    let second = true;
    for (let i = 0; i < N; i++) {
        if (tmpArr[i] != B[i]) {
            second = false;
        }
    }

    let answer = -1;

    if (!first && !second) {
        answer = -1;
    } else if (!first) {
        answer = cnt2;
    } else if (!second) {
        answer = cnt1;
    } else {
        answer = Math.min(cnt1, cnt2);
    }

    console.log(answer);
};

const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    let N = null;
    let count = 0;
    const data = [];

    for await (const line of rl) {
        if (!N) {
            N = line.trim().split(' ');
        } else {
            data.push(line);
            count += 1;
        }
        if (2 == count) {
            rl.close();
        }
    }

    solution(Number(N), data);
    process.exit();
})();
