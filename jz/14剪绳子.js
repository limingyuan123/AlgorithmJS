//动态规划与贪婪算法类
//动态规划解法，大由小决定、小还有更小，每个均有极值，从上往下分析，从下往上求解
var m=8;
function findMaxProduct(m){
    if(m < 2)
        return 0;
    if(m === 2)
        return 1;
    if(m == 3)
        return 2;
    var products = new Array(m);
    products[0] = 0;
    products[1] = 1;
    products[2] = 2;
    products[3] = 3;
    for(let i = 4;i <= m;i++){
        var max =  0;
        for(let j = 1;j <= i/2;j++){
            let product = products[j] * products[i-j];
            if(product>max){
                max = product;
                products[i] = max;
            }
        }
    }
    return products[m-1];
}
var res = findMaxProduct(m);
console.log(res);

//贪心算法解法