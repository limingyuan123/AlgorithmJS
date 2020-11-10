//动态规划与贪婪算法类
//动态规划解法，大由小决定、小还有更小，每个均有极值，从上往下分析，从下往上求解
// var m=8;
// function findMaxProduct(m){
//     if(m < 2)
//         return 0;
//     if(m === 2)
//         return 1;
//     if(m == 3)
//         return 2;
//     var products = new Array(m);
//     products[0] = 0;
//     products[1] = 1;
//     products[2] = 2;
//     products[3] = 3;
//     for(let i = 4;i <= m;i++){
//         var max =  0;
//         for(let j = 1;j <= i/2;j++){
//             let product = products[j] * products[i-j];
//             if(product>max){
//                 max = product;
//                 products[i] = max;
//             }
//         }
//     }
//     return products[m-1];
// }
// var res = findMaxProduct(m);
// console.log(res);

//贪心算法解法
var length = 5;
function findMaxProduct2(length){
    if(length < 2)
        return 0;
    if(length === 2)
        return 1;
    if(length == 3)
        return 2;
    if(length == 4)
        return 4;
    var num3 = parseInt(length/3);
    if((length - num3*3) === 1){
        num3 -= 1;
    }
    var num2 = parseInt((length-3*num3)/2);
    return (Math.pow(3,num3) * Math.pow(2,num2));
}
var res = findMaxProduct2(length);
console.log(res);