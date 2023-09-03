var string = ['sagaragas']
function checkP(str) {
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 -i]) {
            return false;
        }
    }
    return true;
}
console.log(checkP(string))