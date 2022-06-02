let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const N = input.shift()

const solution = (N) => {
    let answer = '';
    while(N.length !== 0){
        if(N.length>1){
            answer = parseInt(N.slice(N.length-1), 8).toString(2).padStart(3,'0') + answer;
        }else{
            answer = parseInt(N.slice(N.length-1), 8).toString(2) + answer;
        }
        N = N.slice(0, N.length-1);
    }
    console.log(answer);
};

solution(N);
