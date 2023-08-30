// Question 4:
// Write a JavaScript function that takes two arrays
//  as input and returns a new array containing elements
//   that are present in both arrays.

var array1 = [1, 2, 34, 5, 6];
var array2 = [2, 5, 6, 7, 8];

function findSame(array1, array2) {
  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        newArray.push(array1[i]);
      }
    }
  }
  return newArray;
}

console.log(findSame(array1, array2));




var array1 = [5, 6, 89, 35, 45, 36];
var array2 = [84, 96, 5, 48, 2, 69];

function findSame(array1, array2) {
  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2; j++) {
      if (array1[i] == array2[j]) {
        newArray.push(array1[i]);
      }
    }
  }
  return newArray;
}

console.log(findSame(array1, array2));




var array1 = [8,5,9,69,5,85];
var array2 = [,58,9966,448,4465];

function findSame(array1, array2) {
  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        newArray.push(array1[i]);
      }
    }
  }
  return newArray;
}

console.log(findSame(array1, array2));




var array1 = [566848,5151,3236,365,89,78];
var array2 = [8,9,55,9,1484,226];

function findSame(array1, array2) {
  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        newArray.push(array1[i]);
      }
    }
  }
  return newArray;
}

console.log(findSame(array1, array2));