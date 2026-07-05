//Converting Integer to string and reversing the string is not a good Approach...!
//Using Modulus you can get the last number by using this we reverse the Integer.

const reverseInt = (integer) => {
    let reverseValue = 0;
    while (integer > 0){
        //Geting Last value
        const lastValue = (integer % 10) ;

        //Shift reversed number left, add the new digit
        reverseValue = (reverseValue * 10) + lastValue
        integer = Math.trunc(integer / 10);
    }
    return reverseValue;
}

console.log(reverseInt(123))

//If you have doubt in Math.trunc() check here the difference
/*
console.log(Math.trunc(1/10))
console.log(1/10)
*/