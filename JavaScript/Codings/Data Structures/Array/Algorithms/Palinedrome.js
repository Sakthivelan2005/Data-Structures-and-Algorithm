//Reverse String Algorithm
const reverse = (string) => string.split("").reverse().join("");

//Finding Palinedrome algorithm
const isPalinedrome = (string) => {
    const str = string.toUpperCase(); //for comparison I equalize all characters by converting to upper case
    if (str === reverse(str)){ //comparing the original string with reversed string
        console.log(string, " is Palinedrome.");
    }
    else{
        console.log(string, " is Not a Palinedrome.");
    }
}

isPalinedrome("Malayalam") //Execution