class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Queue{
    constructor(Value) {
        this.first = new Node(Value);
        this.last  = this.first;
        this.length = 1;
    }
}

let MyQueue = new Queue(10);
console.log(MyQueue.enqueue(20));
console.log(MyQueue.enqueue(30));
