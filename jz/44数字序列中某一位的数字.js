/**
 * 0-9 10*1 10-99 90*2=180 100-999 900*3=2700 1000-9999 9000*4=36000
 */
// var str = '012345678910111213';
var n = 1;
function findNumPostion(n){
    if(n<1){
        return null;
    }

    //先比较个位的
    if(n<11){
        return n-1;
    }else{
        var digit = 2;
        sum = 10;
        n-=sum;
        while(n>(digit*9*Math.pow(10,digit-1))){
            sum += (digit*9*Math.pow(10,digit-1));
            n-=sum;
            digit += 1;
        }
        //找落到哪个位数哪个数以及数的哪一位置
        var numTh = parseInt(n/digit);//取整
        var num = n%digit;//取余
        var num0 = Math.pow(10,digit-1);//基础位置的数
        if(num === 0){
            return (num0 + numTh -1)%10;
        }else{
            var str = num0 + numTh + '';
            for(let i=0;i<num;i++){
                return str[i];
            }
        }
    }
}
let res = findNumPostion(n);
console.log(res);