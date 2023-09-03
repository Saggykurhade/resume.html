var array = [1, 2, 3, 4, 5, 6]

function reverse(array) {
    var reverse = [];
    for (var i = array.length-1; i >= 0; i--) {
        reverse.push(array[i])
    }
    return reverse
}

console.log(reverse(array))