let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const [N, M] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const solution = (N, M, input) => {
    let A = input.splice(0, N);
    let move = input.splice(0, M);

    const moveCloudAndRain = (x, y, arr) => {
        y = y % N;
        const dir = [
            [],
            [0, -1],
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, 1],
            [1, 1],
            [1, 0],
            [1, -1],
        ];
        for (let i = 0; i < arr.length; i++) {
            const [nx, ny] = arr[i];
            const [dx, dy] = [dir[x][0] * y, dir[x][1] * y];
            const [tmpx, tmpy] = [(nx + dx + N) % N, (ny + dy + N) % N];
            arr[i] = [tmpx, tmpy];
            A[tmpx][tmpy] += 1;
        }
        return arr;
    };

    const waterCopyBug = (arr) => {
        let visited = Array.from(Array(N+1), ()=> Array(N+1).fill(false));
        const dx = [1, 1, -1, -1];
        const dy = [1, -1, 1, -1];
        for (let i = 0; i < arr.length; i++) {
            const [x, y] = arr[i];
            visited[x][y] = true;
            let count = 0;
            for (let i = 0; i < 4; i++) {
                let nowX = x + dx[i];
                let nowY = y + dy[i];
                if (
                    nowX < 0 ||
                    nowY < 0 ||
                    nowX >= A.length ||
                    nowY >= A.length
                )
                    continue;

                if (A[nowX][nowY] !== 0) {
                    count++;
                }
            }
            A[x][y] += count;
        }
        return visited;
    };

    const createCloudAndReduceWater = (visited) => {
        let nextCloud = [];
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                let flag = false;
                if(visited[i][j]) continue;
                if (flag) continue;

                if (A[i][j] >= 2) {
                    A[i][j] -= 2;
                    nextCloud.push([i, j]);
                }
            }
        }
        return nextCloud;
    };

    const getSum = () => {
        let sum = 0;
        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < A.length; j++) {
                sum += A[i][j];
            }
        }
        return sum;
    };
    let cloudArea = [
        [N - 2, 0],
        [N - 2, 1],
        [N - 1, 0],
        [N - 1, 1],
    ];
    move.forEach(([x, y]) => {
        cloudArea = moveCloudAndRain(x, y, cloudArea);
        let visited = waterCopyBug(cloudArea);
        cloudArea = createCloudAndReduceWater(visited);
    });
    console.log(getSum());
};

solution(N, M, data);
