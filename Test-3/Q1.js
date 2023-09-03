var input = 5;

function printStars(number) {
    for (var i = 1; i <= number; i++) {
        var pattern = ""
        for (var j = 1; j <= i; j++) {
            pattern = pattern + "*"
        }
        console.log(pattern)
    }
}

printStars(input)