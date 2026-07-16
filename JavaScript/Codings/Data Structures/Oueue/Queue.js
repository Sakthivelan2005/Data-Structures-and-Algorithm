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

    enqueue(value){
        let newNode = new Node(value)

        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(){
        let temp = this.first;

        if(this.length === 0){
            return "No Element Found";
        }
        else if(this.length === 1){
            this.first = null;
            this.last = null;
        }
        else{
            this.first = this.first.next;
        }
        temp.next = null;
        this.length--
        return temp;
    }
}

let MyQueue = new Queue(10);
console.log(MyQueue.enqueue(20));
console.log(MyQueue.enqueue(30));
console.log(MyQueue.dequeue());
console.log(MyQueue);
console.log(MyQueue.dequeue());
console.log(MyQueue);
console.log(MyQueue.dequeue());
console.log(MyQueue);
console.log(MyQueue.dequeue());
console.log(MyQueue);

