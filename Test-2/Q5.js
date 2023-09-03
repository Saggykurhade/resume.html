var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
function evenNumbers(array) {
    var count = 0;
    for ( var i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            count = count + 1
        }
    }
    return count
 }
 console.log(evenNumbers(array))