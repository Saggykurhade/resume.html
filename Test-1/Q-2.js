// Question 2:
// Write a JavaScript function that takes an array of
// numbers as input and returns a new array with only the even
// numbers from the original array.

var numbers = [2, 4, 5, 6, 7, 8, 9, 2, 5, 7, 8, 4, 3, 6];

function findSumNumber(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(findSumNumber(numbers));




var numbers = [145, 25, 263, 246, 369, 145, 2665, 31564, 165456, 165];

function findSumNumber(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(findSumNumber(numbers));




var numbers = [
  11, 12, 25, 25, 36, 14, 15, 25, 48, 74, 79, 46, 35, 69, 89, 321, 42, 55, 25,
  55, 66, 66, 54, 215, 52,
];

function findSumNumber(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(findSumNumber(numbers));




var numbers = [
    11, 12, 25, 25, 36, 14, 15, 25, 48, 74, 79, 46, 35, 69, 89, 321, 42, 55, 25,
    55, 66, 66, 54, 215, 52,
  ];
  
  function findSumNumber(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0) {
        result.push(array[i]);
      }
    }
    return result;
  }
  console.log(findSumNumber(numbers));
   