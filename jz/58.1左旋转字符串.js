var str = "abcdefg";
function leftReverse(str,num){
    if(str == null||num<1||str.length<num){
        return null;
    }
    var newStr = str.split("");
    //局部反转
    reverse(newStr,0,num-1);
    reverse(newStr,num,newStr.length-1);
    //整体反转
    reverse(newStr,0,str.length-1);
    console.log(newStr.join(""));
}
function reverse(str, start, end) {
    for (let l = start, r = end; l < r; l++, r--) {
        let tmp = str[l];
        str[l] = str[r];
        str[r] = tmp;
    }
    return str;
}
let res = leftReverse(str,2);