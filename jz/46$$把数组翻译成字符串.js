//12258
//动态规划类，自底向上
let num = 12258;

function trans(num) {
    if (num == null || num < 0) {
        return null;
    }
    var str = num + '';
    var flag = transStr(str);
    return flag;
}

function transStr(str) {
    var dp = [];
    var count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        count = 0;
        if (i < str.length - 1) {
            count = dp[i + 1];
        } else {
            count = 1;
        }
        if (i < str.length - 1) {
            var digit1 = str[i] - 0;
            var digit2 = str[i + 1] - 0;
            if ((digit1 * 10 + digit2) >= 10 && (digit1 * 10 + digit2) <= 25) {
                if (i < str.length - 2) {
                    count += dp[i + 2];
                } else {
                    count += 1;
                }
            }
        }
        dp[i] = count;
    }
    return dp[0];
}

let res = trans(num);
console.log(res);