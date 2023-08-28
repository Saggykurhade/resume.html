Question 1:
Write a JavaScript function that takes an array of strings 
as input and returns a new array containing the lengths of those strings.


var strings = ["Swaraj", "Awdiz", "Institute", "gvbh", "iouyg", 'KJH']

// result = [6,5,9,4,5,3]

function findStringLength(array) {
    // console.log(array, "strings of array")
    var result = []
    for (var i = 0; i < array.length; i++) {
        // console.log(array[i].length)
        result.push(array[i].length)
    }
    return result;
}

console.log(findStringLength(strings))