# **Linked List**

- A *Linked list* is a linear data structure where elements, called nodes, are not stored contiguously in memory.

- Instead, each node contains *data* and *reference*, or *link* to the next node in the sequence. 


```js
class Node{
    constructor(value){
        this.data = value;
        this.reference = null;
    }
}

class LinkedList {
    constructor(Value){
        this.head = new Node(Value);
        this.tail = this.head;
        this.length = 1;
    }
}

let obj = new LinkedList(10)
console.log(obj);
```