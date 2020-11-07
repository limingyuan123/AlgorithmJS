//此方法无法解决超大数问题，故不可采用
// var n = 3;
// function consoleN(n){
//     if(n<=0){return null}
//     var re = 1;
//     for(let i=0;i<n;i++){
//         re*=10;
//     }
//     for(let i=1;i<re;i++){
//         console.log(i);
//     }
// }
// var res = consoleN(n);
// console.log(res);

//使用字符串方式输出，解决任意超大数问题
var n = 4;
function printNum(n) {
    var num = new Array(n + 1);
    for (let i = 0; i < n+1; i++) {
        num[i] = '0';
    }
    var flag = 0;
    while (!flag) {
        flag = increase(num)
        if(!flag){
            printFuc(num);
        }
        
    }
}
//模拟加法
function increase(num) {
    var insum = 0;
    var overTop = 0;
    var b = new Boolean();//初始值位false，标识是否最后一位
    for (let i = num.length - 1; i >= 0; i--) {
        insum = num[i] - '0' + overTop;//当前的待加值
        if (i == num.length - 1) {
            insum++;
        }
        if (insum >= 10) {
            if (i == 0) {
                return 1;
            } else {
                insum -= 10;
                num[i] = insum + '';
                overTop = 1;
            }
        } else {
            if(i == 0){
                return 1;
            }
            num[i] = insum+'';
            break;
        }
    }
    return 0;
}
//打印结果
function printFuc(num) {
    var flag = 0;
    for(let i=0;i<num.length;i++){
        if(num[i]!='0'){
            flag = i;
            break;
        }
    }
    var res = '';
    while(flag<num.length){
        res += num[flag];
        flag++;
    }
    console.log(res);
}
var res = printNum(n);
// console.log(res);