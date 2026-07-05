//The execution time of the algorithm grows quadratically with the size of the input data.

//Algorithm of Nested loop
const findPairs = (arr) => {
    for (let i = 0; i < arr.length; i++) {             // O(n^1)
        for (let j = i + 1; j < arr.length; j++) {         // O(n^2)
            console.log(`Pair: ${arr[i]}, ${arr[j]}`);
        }
    }
};

const array = [1,2,3,4,5];
findPairs(array); //Execution time increases Quadratically (2X time more)