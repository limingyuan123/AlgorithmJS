var n = 121;
function find1Num(n) {
    //数字转为字符串
    var num = 0;
    for (let i = 1; i <= n; i++) {
        let str = i + '';
        for (let j = 0; j < str.length; j++) {
            if (str[j] === '1') {
                num++;
            }
        }
    }
    return num;
}
let res = find1Num(n);
console.log(res);