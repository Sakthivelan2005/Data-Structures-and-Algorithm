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

    //Custom Push Method for Adding elements into Linked List at end
    push(value) {
        let newNode = new Node(value);
        
        //If there is no element in the Linked List
        if(!this.head){
            this.head = newNode; //Set New node as Head
            this.tail = newNode; //Set New Node as Tail
        }
        else{
            this.tail.reference = newNode; //Set reference node to new node
            this.tail = newNode; //Set New node as Tail.
        }

        this.length++ //Increase the length after adding element.
    }

    //Custom Pop Method for Remove elements into Linked List at end 
    pop(){
        let temp = this.head;
        let prev = this.head;

        //If there is no Nodes just return Undefined
        if(!this.head){
            return undefined;
        }

        //traverse into Linked List Until the referece is null to get Last Element
        while(temp.reference){
           prev = temp;
           temp = prev.reference;

        }
        
        this.tail = prev; //The Last previous element assigned as tail
        this.tail.reference = null; //The Tail's referece assigned as null
        this.length--; //After removing decreamenting the length by 1

        //After removing if there is no elements are there just assigned Null to both Head and tail
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return temp; //returns the removed element
        
    }

    unshift(Value){
        let newNode = new Node(Value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.reference = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
    }

    shift(){
        if(!this.head){
            return undefined;
        }
        else{
            this.head = this.head.reference;
            this.length--;

             if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
        }
       return this;
    }
}

let obj = new LinkedList(10);
// obj.push(20);

console.log(obj);
console.log(obj.pop())

console.log(obj)


console.log(obj.unshift(5))


console.log(obj.shift())
console.log(obj.shift())

