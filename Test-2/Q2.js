var array = [1,2,3,4]

function maximum(array) {
    var highest = [0];
    for (var i = 1; i < array.length; i++) {
        if (highest < array[i]) {
            highest = array[i]
        }
    }
    return highest
}
console.log(maximum(array))