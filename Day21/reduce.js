const array = [10, 23, 56, 89, 76, 56, 53];

const initialValue = 0;

const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);