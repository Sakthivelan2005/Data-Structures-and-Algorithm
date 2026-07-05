//The execution time of the algorithm remains constant regardless of the input size.

const arr = ["milk","bread","eggs","sugar","dhal","pepper"] //Any number of input size

//Algorithm
const findValue = (arr, index) => arr[index];

const result = findValue(arr,0); //Execution time is always same.

console.log(result)