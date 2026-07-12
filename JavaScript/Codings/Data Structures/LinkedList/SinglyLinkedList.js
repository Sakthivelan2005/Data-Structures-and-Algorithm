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
        
        //If there is no element in the Linked List
        if(!this.head){
            this.head = newNode; //Set New node as Head
            this.tail = newNode; //Set New Node as Tail
        }
        else{
            this.tail.next = newNode; //Set next node to new node
            this.tail = newNode; //Set New node as Tail.
        }

        this.length++ //Increase the length after adding element.
        return this
    }

    //Custom Pop Method for Remove elements from Linked List at end 
    pop(){
        let temp = this.head;
        let prev = this.head;

        //If there is no Nodes just return Undefined
        if(!this.head){
            return undefined;
        }

        //traverse into Linked List Until the referece is null to get Last Element
        while(temp.next){
           prev = temp;
           temp = prev.next;

        }
        
        this.tail = prev; //The Last previous element assigned as tail
        this.tail.next = null; //The Tail's referece assigned as null
        this.length--; //After removing decreamenting the length by 1

        //After removing if there is no elements are there just assigned Null to both Head and tail
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
            if(idx === index){ //If Index Matches return the current Node
                return temp;
            }
            idx++;
            temp = temp.next;  //Traverse to Next Nodes        
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
        
        if(index === 0){ //If the Index is at begining
            return this.unshift(Value)
        }
        else if(index === (this.length)){ //If the index is at End
            return this.push(Value)
        }
        else{
            if(index > this.length){
                return "Index is too far, Cannot be Insert"
            }
            newNode.next = this.get(index); //this assign new node's next node to After index node.
            this.get(index - 1).next = newNode; //this assign new node to current index's next node
            this.length++;            
            return this;
        }
    }

    //This method returns Size of the LinkedList
    size(){
        //You can write the logic in one by returning lenght as follows
        //return this.length;

        // But in real-world case this length may be malfunctioned at any case. So We manually write code to get the size.
        let counter = 0;
        let traverse = this.head;

        //traverse till the head.next reach null
        while(traverse){
            counter++; //Increment by one
            traverse = traverse.next;
        }

        return counter;

    }

    //this clear all the elements in the Linked List.
    clear(){
        this.head = null;
        this.tail = null;
        this.length = 0;
        return this;
    }
}
 
let obj = new LinkedList(10);

console.log(obj);
console.log(obj.pop())

console.log(obj)

console.log(obj.shift())
console.log(obj.unshift(5))

console.log(obj.getFirst());
console.log(obj.getLast());

console.log(obj.get(0))
console.log(obj.set(17,0));
console.log(obj);

console.log(obj.insert(100,0));
console.log(obj.insert(570,1));

console.log(obj.size());
console.log(obj.insert(1090,4));

console.log(obj.clear())

