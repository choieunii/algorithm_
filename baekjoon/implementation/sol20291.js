/* 2023-01-08 백준 20291 파일 정리 실버 3*/ 

let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const N = Number(input.shift());
const data = input.map((str) => str.replace(/\n|\r/g, ""));

const solution = (input) => {
    const inputMap = {};

    input.forEach((file) => {
        const [_, fType] = file.split(".");
        if(inputMap[fType]) inputMap[fType] += 1;
        else inputMap[fType] = 1; 
    })

    const dataObj = Object.entries(inputMap).sort((a,b) => b[0] > a[0] ? -1: 1);

    dataObj.forEach(([fType, cnt]) => {
        console.log(`${fType} ${cnt}`);
    })

};

solution(data);
