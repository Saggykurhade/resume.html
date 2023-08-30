// Question 3:
// Write a JavaScript function that takes an array of numbers
//  as input and returns the smallest number from the array.

var numbers = [7, 4, 5, 7, 8, 9, 5, 3, 6, 8, 4, 7, 9, 3, 6, 8, 2];

function findSmallNumber(array) {
  var minimum = array[0]; //  7 - 4 -  3 - 2
  for (var i = 1; i < array.length; i++) {
    // console.log(minimum, array[i], minimum > array[i])
    if (minimum > array[i]) {
      minimum = array[i]; // 7 -4 - 3 - 2
    }
  }
  return minimum;
}

console.log(findSmallNumber(numbers));




var numbers = [
  456, 2125, 32578, 31545, 121, 21553, 3854, 55544, 321545, 488, 8865, 5484,
  1545,
];

function findSmallNumber(array) {
  var minimum = array[0];
  for (var i = 1; i < array.length; i++) {
    if (minimum > array[i]) {
      minimum = array[i];
    }
  }
  return minimum;
}

console.log(findSmallNumber(numbers));




var numbers = [
  1254, 2365, 23698, 7895, 478996, 41254, 12, 54698, 5469, 42656, 98,
];

function findSmallNumber(array) {
  var minimum = array[0];
  for (var i = 1; i < array.length; i++) {
    if (minimum > array[i]) {
      minimum = array[i];
    }
  }
  return minimum;
}

console.log(findSmallNumber(numbers));




var numbers = [25, 121, 45, 36, 25, 89, 78, 456, 365, 21, 36, 325, 89];

function findSmallNumber(array) {
  var minimum = array[0];
  for (var i = 1; i < array.length; i++) {
    if (minimum > array[i]){
        minimum = array[i];
    }
  }
  return minimum;
}

console.log(findSmallNumber(numbers));