var num = 12258;
var flag = 0;
//动态规划类
function findMethod(str) {
    var count = 0;
    var counts = [];
    if (str.length == 0) {
        return null;
    }
    for (let i = str.length-1; i >= 0; i--) {
        count = 0;
        if (i < str.length - 1) {
            count = counts[i + 1];
        } else {
            count = 1;
        }
        if (i < str.length - 1) {
            let digit1 = str[i] - 0;
            let digit2 = str[i + 1] - 0;
            let coverted = digit1 * 10 + digit2;
            if (coverted >= 10 && coverted <= 25) {
                if (i < str.length - 2) {
                    count += counts[i + 2];
                } else {
                    count += 1;
                }
            }
        }
        counts[i] = count;
    }
    count = counts[0];
    return count;
}


let res = findMethod(num + "");
console.log(res);