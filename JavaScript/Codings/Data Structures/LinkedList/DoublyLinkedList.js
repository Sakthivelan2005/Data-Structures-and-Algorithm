class Node{
    constructor(Value){
        this.date = Value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(Value){
        this.head = new Node(Value);
        this.tail = this.head;
        this.length = 1;
    }
}

let obj = new DoublyLinkedList(10);
console.log(obj);