var input = 4156;
function find1(input){
    //将数字转为二进制位
    var num = 0;//计数
    while(parseInt(input/2)!=0){
        if(input%2 == 1){
            num++;
        }
        input = parseInt(input/2);
    }
    if(input%2 == 1){
        num++;
    }
    return num;
}
var res = find1(input);
console.log(res);