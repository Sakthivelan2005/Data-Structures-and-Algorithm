# **Array**

### *Array* is an ordered collection of elements that can be accessed by using a numerical index.
---

```js
//Grab your Own Array.
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
        for (let i = 0; i < this.length; i++) {
            this.array[i] = this.array[i+1];      
        }
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

console.log("Object Created: \n", MyArrayObj);
```