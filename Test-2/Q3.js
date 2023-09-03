var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function avgOfNumbers(array) {
    var avg = 0
    for (var i = 0; i < array.length; i++) {
        avg = avg + array[i]
    }
    return avg/array.length
}

console.log(avgOfNumbers(array))