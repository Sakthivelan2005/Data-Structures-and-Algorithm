//If the number divisible by 3 => "Fizz"
//If the number divisible by 5 => "Buzz"
//If the number divisible by 3 and 5 => "FizzBuzz"
//Iterate from 1 to n

//Algorithm
const FizzBuzz = (num) => {
    for(i = 1; i <= num; i++){
        if((i%3 === 0) && (i%5 === 0)){ //First checking both the condition divizible by 3 and 5
            console.log("FizzBuzz");
        }else if(i%3 === 0){ //Second checking divisible by 3
            console.log("Fizz");
        }else if(i%5 === 0){ //Third checking divible by 5
            console.log("Buzz");
        }else{                 //If all the conditions not satisfied just print the number itself.
            console.log(i);
        }
    }
}
FizzBuzz(200000);