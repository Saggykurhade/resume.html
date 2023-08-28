Question 3:
Write a JavaScript function that takes an array of numbers
 as input and returns the smallest number from the array.


var numbers = [7, 4, 5, 7, 8, 9, 5, 3, 6, 8, 4, 7, 9, 3, 6, 8, 2];
function findSmallNumber(array) {
    var minimum = array[0]; //  7 - 4 -  3 - 2
    for (var i = 1; i < array.length; i++) {
        console.log(minimum, array[i], minimum > array[i])
        if (minimum > array[i]) {
            minimum = array[i]; // 7 -4 - 3 - 2
        }
    }
    return minimum
}
console.log(findSmallNumber(numbers))