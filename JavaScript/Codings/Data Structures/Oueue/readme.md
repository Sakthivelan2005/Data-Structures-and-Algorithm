# <sub><img width="52" height="52" alt="image" src="https://github.com/user-attachments/assets/adeebea3-4d90-45db-90b9-b3c9dfb7a1c0" /></sub> <sup>**Queue**</sup>

- A **Queue** is a linear data structure that functions like a waiting line.
- It follows the **FIFO** (First In First Out) principle.
- It means the element that enters the queue first will be the first one to be removed.

```js
//Grab Your Own Queue
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
```