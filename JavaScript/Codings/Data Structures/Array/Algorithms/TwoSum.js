/*
Imagine you have a list of numbers and a target number. Your
job is to find two numbers in that list that add up to the target
number. You also need to tell which positions (or indexes) those
two numbers are at the list.

Example:
If the list is [2,7,11,15] and the target is 9, then the answe would
be [0,1] because 2 (at index 0) Plus 7 (at index 1) equals 9.
*/

//NOTE: This is a Brute force method, So It is not a good approach to solve this.
const TwoSum = (arr,target) => {
    //loop through each number in the list
    for(let i = 0; i < arr.length; i++){
        //For each number, it checks rest of the numbers in the list
        for(let j = i+1; j < arr.length; j++){
            if((arr[i]+arr[j]) === target){ //If the current adding number and target value matched return it's indexes.
                return [i,j];
            }
        }
            
    }
    return []; //If Nothing is matched just return the empty array
}

console.log(TwoSum([1,7,11,15,3],9)) //Execution