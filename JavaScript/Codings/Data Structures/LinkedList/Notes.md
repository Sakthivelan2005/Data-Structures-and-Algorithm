# **Linked List**

- A **Linked list** is a linear data structure where elements, called nodes, are not stored contiguously in memory.

- Instead, each node contains **data** and **reference**, or *link* to the next node in the sequence. 


## **1. Singly Linked List**
```js
//Grab your own Linked List 
class Node{
    constructor(value){
        this.data = value;
        this.next = null;
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
        
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode; 
        }

        this.length++ 
        return this
    }

    //Custom Pop Method for Remove elements from Linked List at end 
    pop(){
        let temp = this.head;
        let prev = this.head;

        if(!this.head){
            return undefined;
        }

        while(temp.next){
           prev = temp;
           temp = prev.next;

        }
        
        this.tail = prev; 
        this.tail.next = null; 
        this.length--; 

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return temp; //returns the removed element
        
    }

    //Custom Unshift method adding element into Linked List at Front 
    unshift(Value){
        let newNode = new Node(Value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
    }
    //Custom Shift method Remove element from Linked List at Front 
    shift(){
        if(!this.head){
            return undefined;
        }
        else{
            this.head = this.head.next;
            this.length--;

             if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
        }
       return this;
    }

    //This method used to get First Element of Linked List
    getFirst(){
        if(!this.head){
            return "No nodes found"
        }
        else{
            return this.head
        }
    }

    //This method used to get Last Element of Linked List
    getLast(){
        if(!this.tail){
            return "No nodes found";
        }
        else{
            return this.tail
        }
    }

    //This method used to get Element by index
    get(index){
        let idx = 0;
        let temp = this.head;

        while(temp){
            if(idx === index){ 
                return temp;
            }
            idx++;
            temp = temp.next;        
        }
        return "Index out of bound";
    }

    //This used to set/Modify data in LinkedList by index
    set(value,index){
        let idx = this.get(index);
        if(idx === "Index out of bound"){
            return  "Index out of bound"
        }

        idx.data = value;
        return "Modified"
    }

    //This method is used to insert element into Linked List at any place by index
    insert(Value,index){
        
        let newNode = new Node(Value);
        
        if(index === 0){ 
            return this.unshift(Value)
        }
        else if(index === (this.length)){ 
            return this.push(Value)
        }
        else{
            if(index > this.length){
                return "Index is too far, Cannot be Insert"
            }
            newNode.next = this.get(index);
            this.get(index - 1).next = newNode; 
            this.length++;            
            return this;
        }
    }

    //This method returns Size of the LinkedList
    size(){
        
        let counter = 0;
        let traverse = this.head;

        while(traverse){
            counter++; //Increment by one
            traverse = traverse.next;
        }

        return counter;

    }

    //This method clear all the  nodes in the Linked List
    clear(){
        this.head = null;
        this.tail = null;
        this.length = 0;
        return this;
    }
}
 
let obj = new LinkedList(10); //Use it like this.

```
---

## **2. Doubly Linked List**
* A **doubly linked list** has nodes with addresses to both the **previous** and the **next** node.

```js
//Grab your own Doubly Linked List 
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
```