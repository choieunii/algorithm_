let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const N = Number(input.shift());
const data = input.map((a) => a.trim().split(' '));
let result = '';

const preorder = (tree, node) => {
    if (node === '.') return;
    const [left, right] = tree[node];
    result += node;
    preorder(tree, left);
    preorder(tree, right);
};
const inorder = (tree, node) => {
    if (node === '.') return;
    const [left, right] = tree[node];
    inorder(tree, left);
    result += node;
    inorder(tree, right);
};
const postorder = (tree, node) => {
    if (node === '.') return;
    const [left, right] = tree[node];
    postorder(tree, left);
    postorder(tree, right);
    result += node;
};

const solution = (N, input) => {
    const tree = [];

    for (let i of input) {
        tree[i[0]] = [i[1], i[2]];
    }

    preorder(tree, 'A', result);
    result += '\n';
    inorder(tree, 'A', result);
    result += '\n';
    postorder(tree, 'A', result);
    console.log(result);
};

solution(N, data);
