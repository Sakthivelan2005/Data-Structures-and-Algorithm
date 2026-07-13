class Node{
    constructor(Value){
        this.data = Value;
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

    //Custom Push method to add element at end of the Linked List
    push(value){
        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail
        this.tail = newNode;
        this.length++;

        return this;
    }

    //Custom Pop method to remove element at end of the Linked List
    pop(){
        let temp =  this.tail;
        if (this.length === 0){
            return undefined;
        }
        else if(this.length === 1){
            this.head = null;
            this.tail = null
        }
        else{
            this.tail = this.tail.prev;
            this.tail.next = null
            temp.prev = null;
        }
       
        this.length--;
        return temp
    }

    //Custom Unshift method to add element at Beginning of the linked list.
    unshift(value){
        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //Custom Shift method to remove element from Beginning of the linked list.
    shift(){
        let temp = this.head;
    
        if(this.length === 0){
            return undefined;
        }
        else if(this.length === 1){
            this.head = null;
            this.tail = null;
            temp.next = null;
        }
        else{
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        
        this.length--;
        return temp;
    }
}

let obj = new DoublyLinkedList(10);
console.log(obj);
console.log(obj.push(20))
console.log(obj.push(30))

console.log(obj.pop())

console.log(obj);

console.log(obj.unshift(40))

console.log(obj.shift())


console.log(obj);



export default DoublyLinkedList;