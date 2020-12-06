//不限制除法
function findB(arrA){
    //不限制除法
    let arrB = [];
    for(let i=0;i<arrA.length;i++){
        arrB.push(findVal(arrA,i));
    }
    return arrB;
}
function findVal(arrA,flag){
    let sum = 1;
    if(arrA[flag] === 0){
        for(let i=0;i<arrA.length;i++){
            if(flag!=i){
                sum*=arrA[i];
            }                            
        }
    }else{
        for(let i=0;i<arrA.length;i++){                            
            sum*=arrA[i];                                                        
        }
        sum/=arrA[flag];
    }
    return sum;   
}
//限制除法
var arrA = [0,1,2,3];
function findB(arrA){
    //实例化为一个矩阵————实例化为两半矩阵————两半矩阵实例化为两个数组————两个数组进而求一个数组
    let arrc = [], arrd = [], arrb = [];
    arrc[0] = 1;
    arrd[arrA.length-1] = 1;
    //求arrc 自上而下
    for(let i=0;i<arrA.length-1;i++){
        arrc[i+1] = arrc[i] * arrA[i];
    }
    //求arrd 自下而上
    for(let i=arrA.length-1;i>=1;i--){
        arrd[i-1] = arrd[i] * arrA[i];
    }
    //求arrb
    for(let i=0;i<arrA.length;i++){
        arrb[i] = arrc[i]*arrd[i];
        console.log(arrb[i]);
    }
    return arrb;
}
let res = findB(arrA);