//We just change from "hello world" to "Hello World"
//Algorithm
const SetenceCapitilize = (string) => {
    let array = string.toLowerCase().split(" ") //splits the string where the space (" ") is there and convert it to Lower case because use can also type "HELLO WORLD".
    let capitalize = "" //Initialize string
        for(let arr in array ){
            let FirstLetter = array[arr].slice(0,1) //Getting first letter
            capitalize += (FirstLetter.toUpperCase() + array[arr].slice(1)) + " " //Changing first letter to upper case and concating other letter.
    }
    return capitalize

}

console.log(SetenceCapitilize("A jisuhs iusvu")); //Execution

//Simpler version of this
const SetenceCapitilizes = (string) => {
    return string
        .toLowerCase()
        .split(" ")
        .map((word) => word.slice(0,1).toUpperCase() + word.slice(1))
        .join(" ");
}
console.log(SetenceCapitilizes("A jisuhs iusvu")); //Execution
