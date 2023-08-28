Question 4:
Write a JavaScript function that takes two arrays
 as input and returns a new array containing elements
  that are present in both arrays.

var array1 = [1, 2, 34, 5, 6]
var array2 = [2, 5, 6, 7, 8]

function findSame(array1, array2) {
    var newArray = [];
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                newArray.push(array1[i])
            }
        }
    }
    return newArray;
}

console.log(findSame(array1, array2))