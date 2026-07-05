class MyArray {
    constructor() {
        this.length = 0;
        this.array = {};
    }
    //Custom Push Method
    push(value) {
            this.array[this.length] = value ;
            this.length++;
            return this.length;
    }
}

const MyArrayObj = new MyArray();
MyArrayObj.push("Apple");
MyArrayObj.push("Orange");
MyArrayObj.push("Grapes");
MyArrayObj.push("Banana");
console.log(MyArrayObj);