let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const N = Number(input.shift());

const data = input.map((a) => a.split(' ').map((v) => Number(v)));

const solution = (N, data) => {
    const [inorder, postorder] = [data[0], data[1]];
    let result = '';
    const preorder = (inStart, inEnd, postStart, postEnd) => {
        if (inStart > inEnd || postStart > postEnd) return;

        let root = postorder[postEnd];
        result += root + ' ';
        let pos = inorder.indexOf(root);
        let left = pos - inStart;
        preorder(inStart, pos - 1, postStart, postStart + left - 1);
        preorder(pos + 1, inEnd, postStart + left, postEnd - 1);
    };

    preorder(0, N - 1, 0, N - 1);
    console.log(result);
};

solution(N, data);
