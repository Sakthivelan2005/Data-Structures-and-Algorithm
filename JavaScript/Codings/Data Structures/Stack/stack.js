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
}

let myStack = new Stack(10);
console.log(myStack.push(20));
console.log(myStack.push(30));

console.log("Removed: ",myStack.pop());
console.log(myStack);

console.log("Removed: ",myStack.pop());
console.log(myStack);

console.log("Removed: ",myStack.pop());
console.log(myStack);

console.log("Removed: ",myStack.pop());
console.log(myStack);



