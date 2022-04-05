let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const N = Number(input.shift());

const solution = (N) => {
    const queen = new Array(14).fill(0);
    const check = (row) => {
        for (let i = 0; i < row; i++) {
            if (queen[row] === queen[i]) return false;
            if (Math.abs(queen[row] - queen[i]) === row - i) return false;
        }
        return true;
    };
    let cnt = 0;
    const nqueen = (row) => {
        if (row === N) {
            cnt++;
            return;
        }
        for (let i = 0; i < N; i++) {
            queen[row] = i;
            if (check(row)) nqueen(row + 1);
        }
    };
    nqueen(0);
    return cnt;
};

console.log(solution(N));
