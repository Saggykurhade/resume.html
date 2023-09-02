var array = [6, 2, 5]

function sumOfArray(result) {
    var elements = 0;
    for ( var i = 0; i < array.length; i++){
        elements = elements + array[i]
        }
    return elements
}

console.log(sumOfArray(array))