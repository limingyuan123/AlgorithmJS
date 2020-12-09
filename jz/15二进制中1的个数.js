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

//优化版
/**
 * 思路：把一个整数减去1，再和原整数做与运算，会把该整数最右边一个1变成0.那么一个整数的二进制有多少个1，就可以进行多少次这样的操作
 * @param {*} n 
 */
function NumberOf1(n)
{
    // write code here
    var count = 0;
    while(n!=0){
        count++;
        n = n&(n-1);
    }
    return count;
}