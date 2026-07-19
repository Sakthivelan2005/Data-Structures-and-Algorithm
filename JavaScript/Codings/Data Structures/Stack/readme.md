# <img src="https://raw.githubusercontent.com/pheralb/svgl/e91ec90680244e93eb9323cf30796bee10d4d385/static/library/stackoverflow.svg" hight=35 width=30> **STACK** 

- **Stack** is a linear data structure that follows **LIFO** (Last In First Out) principle.
- **Real-world example:** Undo Redo (ctrl+z , ctrl+y) in PC.

```js
//Grab your Own Stack
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

    //Custom Push method for stack
    push(value){
        let newNode = new Node(value)
        if(this.length === 0){
            this.first = newNode;
        }
        else{
            newNode.next = this.first;
            this.first = newNode;
        }

        this.length++;
        return this;
    }

    //Custom pop method for stack
    pop(){
        let temp = this.first;
        if(this.length === 0){
            return "No Item Found";
        }
        else if(this.length === 1){
            this.first = null;
        }
        else{
            this.first = this.first.next;
            temp.next = null;
        }

        this.length--;
        return temp
    }

    //returns minimum Value of the stack
    min(){
        let current = this.first;
        let min = current.data; //Initializing
        if(this.length === 0){
            return "No nodes found";
        }
        else{
            while(current){
                if(min > current.data){
                    min = current.data;
                }
                current = current.next
            }
        }
        
        return min;
    }
}

let myStack = new Stack(10);
//Output
console.log(myStack.push(20));
console.log(myStack.pop());


```