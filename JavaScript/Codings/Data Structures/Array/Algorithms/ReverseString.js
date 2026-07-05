//Reverse string Algorithm
const ReverseString  = (string) => {
    const array = string.split(''); // split the string into array.
    let reversed = ""; // Initialize a string
    for (let i = array.length - 1; i >= 0; i--) {
        reversed += array[i]; //adding array element in reverse order
    }
    return reversed; //return the reversed string
}

const result = ReverseString("Apple")
console.log(result);