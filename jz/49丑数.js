//时间复杂度极高，低效版
var nums = 1500;
function unglyNum(nums){
    var flag = 1;//从1开始，所以已经是1个了
    var num = 2;
    while(flag != 1500){
        if(isUngly(num)){
            flag++;
        }
        num ++;
    }
    return num-1;
}
function isUngly(num){
    while(num%2 === 0){
        num /= 2;
    }
    while(num%3 === 0){
        num /= 3;
    }
    while(num%5 === 0){
        num /= 5;
    }
    if(num === 1){
        return true;
    }else{
        return false;
    }
}
let res = unglyNum(nums);
console.log(res);
//优化版
var nums = 1500;
function unglyNum(nums){
    var ungly = new Array(nums);
    ungly[0] = 1;
    var next = 1;
    var p1 = ungly[0],p2 = ungly[0], p3 = ungly[0];
    var pp1 = pp2 = pp3 = 0;
    while(next < nums){
        ungly[next] = min(p1,p2,p3);
        while(p1*2 <= ungly[next]){
            p1 = ungly[++pp1];
        }
        while(p2*3 <= ungly[next]){
            p2 = ungly[++pp2];
        }
        while(p3*5 <= ungly[next]){
            p3 = ungly[++pp3];
        }
        next++;
    }
    return ungly[nums-1];
}
function min(val1,val2,val3){
    let min = val1*2;
    if(min>=val2*3){
        min = val2*3;
    }
    if(min>=val3*5){
        min = val3*5;
    }
    return min;
}
let res = unglyNum(nums);
console.log(res);