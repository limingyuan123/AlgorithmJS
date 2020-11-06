青蛙跳台阶类问题
// 低效版
function fArray(n){
    if(n<0){
        return null;
    }else if(n == 0){
        return 0;
    }else if(n == 1){
        return 1;
    }else{
        return fArray(n-1) + fArray(n-2)
    }    
}

//递归思想的循环
function fArray2(n){
    var res = [0,1];
    if(n<2){
        return res[n];
    }
    var one = 1,two = 0,re;
    for(let i=2;i<n;i++){
        re = one + two;
        two = one;
        one = re;
    }
    return re;
}