class Node{
    constructor(Value){
        this.data = Value;
        this.next = null;
    }
}

class Stack{
    constructor(Value){
        this.first = new Node(Value);
        this.length = 1
    }
}

let myStack = new Stack(10);
console.log(myStack)