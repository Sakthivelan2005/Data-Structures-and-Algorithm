/*
Write a function that takes an array and a chunk size as input.
The function should return a new array where the origin array
is split into chunks of the specified size

Examples:
input => chunk([1,2,3,4,5,6,7,8],3)
output=> [[1,2,3],[4,5,6],[7,8]]

input => chunk([1,2,3,4,5],2)
output=> [[1,2],[3,4],[5]]
*/

//Basic logic of creating chunk array
const arr = []
arr.push([1,2,3]);
console.log(arr);

//Algorithm
const chunks = ( array, size ) => {
    const chunkArray = []; //Initializing array
    let index = 0; //Initializing index

    while(index < array.length){
        const chunked = array.slice(index, index + size);
        console.log("---------------",chunked); //Sample output of Each array formed
        chunkArray.push(chunked);
        index += size; //Increament by input size
    }
    return chunkArray;
}
console.log(chunks([1,2,3,4,5,6,7,8],3)); //Execution