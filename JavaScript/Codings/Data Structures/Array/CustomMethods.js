class MyArray {
    constructor() {
        this.length = 0;
        this.array = {};
    }

    //Custom Push Method Algorithm
    push(value) {
            this.array[this.length] = value ;
            this.length++;
            return this.length;
    }

    //Custom Get Method Algorithm
    get(index){
        if (index < this.length){
            return this.array[index];
        }else{
            return "Array Index out of Bound";
        }
    }

    //Custom Pop Method Algorithm
    pop(){
        const lastValue = this.array[this.length - 1];
        delete this.array[this.length - 1];
        this.length--;
        return lastValue;
    }

    //Custom Shift method algorithm
    shift(){
        const firstValue = this.array[0];
        //the reason Why I not delete the first values in the array is We just changed the value of 0th index
        //Example:
        /* let a = 1;
            a = 0;
            Now we changed the value from 1 to 0, So that's Why I won't delete the First value in the array

        */
        for (let i = 0; i < this.length; i++) {
            this.array[i] = this.array[i+1];      
        }

        //I deleted the last value to omit the duplicate Value in the array after this process.
        delete this.array[this.length-1];
        this.length--;

        return firstValue;
    }

    // custom delete by index method Algorithm
    deleteByIndex(index){
        const indexValue = this.array[index];
        for (let i = index; i < this.length; i++) {
            this.array[i] = this.array[i+1];      
        }
        delete this.array[this.length-1];
        this.length--;
        return indexValue;

    }
}

const MyArrayObj = new MyArray();

console.log("Object Created: \n",MyArrayObj);

MyArrayObj.push("Apple");
MyArrayObj.push("Orange");
MyArrayObj.push("Grapes");
MyArrayObj.push("Banana");
MyArrayObj.push("Papaya");
MyArrayObj.push("Sapota");

console.log("\nAfter Push Method: \n",MyArrayObj);

const result = MyArrayObj.get(3);
console.log("\nGet Method: \n",result);

const popValue = MyArrayObj.pop();
console.log("\nPop Method: \n",popValue)

console.log("\nAfter Pop Method \n",MyArrayObj)

const ShiftValue = MyArrayObj.shift();
console.log("\nShift Method: \n",ShiftValue)

console.log("\nAfter Shift Method \n",MyArrayObj)

const deleteByIndexValue = MyArrayObj.deleteByIndex(1);
console.log("\ndeleteByIndex Method: \n",deleteByIndexValue)

console.log("\nAfter deleteByIndex Method \n",MyArrayObj)
