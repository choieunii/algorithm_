let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const solution = (data) => {
    const check = (x, y, value) => {
        for (let i = 0; i < 9; i++) {
            if (data[x][i] === value) return false;
        }

        for (let i = 0; i < 9; i++) {
            if (data[i][y] === value) return false;
        }

        let row = Math.floor(x / 3) * 3;
        let col = Math.floor(y / 3) * 3;

        for (let i = row; i < row + 3; i++) {
            for (let j = col; j < col + 3; j++) {
                if (data[i][j] === value) return false;
            }
        }

        return true;
    };
    const backtracking = (x, y) => {
        if (y === 9) {
            backtracking(x + 1, 0);
            return;
        }
        if (x === 9) {
            console.log(data.map((v) => v.join(' ')).join('\n'));
            process.exit(0);
        }

        if (data[x][y] === 0) {
            for (let value = 1; value <= 9; value++) {
                if (check(x, y, value)) {
                    data[x][y] = value;
                    backtracking(x, y + 1);
                }
            }
            data[x][y] = 0;
            return;
        }

        backtracking(x, y + 1);
    };

    backtracking(0, 0);
};

solution(data);
