//**** */
var arr = [3, 12, 352];

function merge(arr) {
    if (arr.length < 1) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + '';
    }

    //冒泡方法
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    var res = '';
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
    //字符串规则比较
}

function compare(s1, s2) {
    return (s1 + s2) > (s2 + s1);
}
let res = merge(arr);
console.log(res);