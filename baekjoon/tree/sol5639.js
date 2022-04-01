let fs = require('fs');
let input = fs.readFileSync('./dev/stdin.txt').toString().trim().split('\n');

const data = input.map(Number);

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    insert(data) {
        if (data <= this.data) {
            if (!this.left) this.left = new Node(data);
            else this.left.insert(data);
        } else {
            if (!this.right) this.right = new Node(data);
            else this.right.insert(data);
        }
    }
}
const postOrder = (node) => {
    node.left && postOrder(node.left);
    node.right && postOrder(node.right);

    console.log(node.data);
};

const solution = (data) => {
    const root = new Node(data[0]);

    for (let i = 1; i < data.length; i++) {
        root.insert(data[i]);
    }
    postOrder(root);
};

solution(data);
