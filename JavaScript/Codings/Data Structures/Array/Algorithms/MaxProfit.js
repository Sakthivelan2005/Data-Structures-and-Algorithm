/*
Imagine you're buying and selling stocks throughout the year.
Your job is to find the biggest profit you could make by
buying low and selling high only once.

Here's what you are given:
    A list of stocks prices for each day => [7,1,5,3,6,4]

Here's what you need to find:
    The difference between the cheapest price you could have bought
    the stock and the most expensive price you could have sold it later
    on.
*/

//Algorithm for finding minimum value from array
var FindMin = (arr) => {
    let minVal = arr[0]; //Initialize first value in the array
    for(let i of arr){
        if(i < minVal){
            minVal = i; //assigining minimum value which is less than minVal
        }
    }
    return minVal;
}

//Algorithm for max profit
const MaxProfit = (arr) => {
    const min = FindMin(arr); //getting minimum value of array
    const startIndex = arr.indexOf(min) + 1; //Starting Index Value where in minimum Value located
    let max = arr[startIndex]; //Initialize Max value
    //Finding maximum value after index of minimum value
    for(i = startIndex; i < arr.length; i++){ //Iterating for loop from index of minimum value to end of the array.
        if(arr[i] > max){
            max = arr[i]; //assigining maximum value which is greater than max
        }
    }
    const maxPrice = max - min; 
    return maxPrice;
}

 console.log("Maximum Profit is ", MaxProfit([7,1,2,3,6,4]));//Execution


//Simpler version using single for loop
/*
const maxProfits = (arr) => {
    let minPrice = arr[0]; //Assume first day is cheapest to buy
    let maxPrice = 0;
    for(i = 0; i < arr.length; i++){
        const currentPrice = arr[i];
        //Updates the minimum price when Lower price is found
        minPrice = Math.min(minPrice, currentPrice);
        const potentialPrice = currentPrice - minPrice;
        //Updates the maximum price when Higher price is found
        maxPrice = Math.max(maxPrice,potentialPrice);
    }
    return maxPrice;
}
console.log("Maximum Profit is ", maxProfits([7,1,2,3,6,4])); //Execution
*/