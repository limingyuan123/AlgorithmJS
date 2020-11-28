//arabcacfr//acfr
var str = "arabcacfr";

function findLongestStr(str) {
    if (str.length === 0 || str == null) {
        return null;
    }
    var position = [];
    for (let i = 0; i < 26; i++) {
        position[i] = -1;
    }
    var currLength = 0;
    var maxLength = 0;
    for (let i = 0; i < str.length; i++) {
        var index = position[str[i].charCodeAt() - 'a'.charCodeAt()];
        if (index < 0 || (i - index) > currLength) {
            currLength++;
        } else {
            if (currLength > maxLength) {
                maxLength = currLength;
            }
            currLength = i - index;
        }
        position[str[i].charCodeAt()  - 'a'.charCodeAt() ] = i;
    }
    if (currLength > maxLength) {
        maxLength = currLength;
    }
    return maxLength;
}
let res = findLongestStr(str);
console.log(res);