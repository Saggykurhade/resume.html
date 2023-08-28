Question 2:
Write a JavaScript function that takes an array of
numbers as input and returns a new array with only the even 
numbers from the original array.



var numbers = [2, 4, 5, 6, 7, 8, 9, 2, 5, 7, 8, 4, 3, 6];

function findSumNumber(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            result.push(array[i])
        }
    }
    return result;
}

console.log(findSumNumber(numbers))