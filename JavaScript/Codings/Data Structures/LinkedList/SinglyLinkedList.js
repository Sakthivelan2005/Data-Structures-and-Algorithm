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

}

let obj = new LinkedList(10);
obj.push(20);
obj.push(30);
obj.push(40);


console.log(obj);
console.log(obj.pop())

console.log(obj)

console.log(obj.shift())
console.log(obj.unshift(5))

console.log(obj.getFirst());
console.log(obj.getLast());

console.log(obj.get(1))


