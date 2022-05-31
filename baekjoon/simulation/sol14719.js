let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const [N, M] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const solution = (N, M, input) => {
    let answer = 0;

    for (let nowIdx = 0; nowIdx < M; nowIdx++) {
        let leftMax = 0;
        let rightMax = 0;
        for (let leftIdx = 0; leftIdx < nowIdx; leftIdx++) {
            if (input[leftIdx] > leftMax) {
                leftMax = input[leftIdx];
            }
        }

        for (let rightIdx = nowIdx + 1; rightIdx < M; rightIdx++) {
            if (input[rightIdx] > rightMax) {
                rightMax = input[rightIdx];
            }
        }

        let moreSmall = Math.min(leftMax, rightMax);
        
        if(input[nowIdx] < moreSmall){
            answer += (moreSmall - input[nowIdx]);
        }
    }
    console.log(answer);
};

solution(N, M, data[0]);
