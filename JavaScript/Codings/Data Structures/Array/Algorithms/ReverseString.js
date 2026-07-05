//Reverse string Algorithm
const ReverseString  = (string) => {
    const length = string.length; // get the length of the string.
    let reversed = ""; // Initialize a string
    for (let i = length - 1; i >= 0; i--) {
        reversed += string[i]; //adding array element in reverse order
    }
    return reversed; //return the reversed string
}

const result = ReverseString("Apple")
console.log(result);

//Another simple way to reverse string with build-in function
/*
const reverse = (string) => string.split("").reverse().join("");
console.log(reverse("Apple"))
*/