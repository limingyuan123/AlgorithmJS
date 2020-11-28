//动态规划
var metrix = [
    [1,10,3,8],
    [12,2,9,6],
    [5,7,4,11],
    [3,7,16,5]
]
function findMaxValue(metrix){
    if(metrix == null){
        return null;
    }
    let raw = metrix.length;
    let col = metrix[0].length;
    //初始化一个max矩阵
    var maxMetrix = new Array(raw);
    for(let i=0;i<raw;i++){
        maxMetrix[i] = new Array(col);
    }

    var top,left;
    //遍历数组，填充max矩阵
    for(let i=0;i<raw;i++){
        for(let j=0;j<col;j++){
            top = undefined;
            left = undefined;
            if(i===0&&j===0){
                maxMetrix[i][j] = metrix[i][j];
            }
            if(i>0){
                top = maxMetrix[i-1][j];
            }
            if(j>0){
                left = maxMetrix[i][j-1];
            }
            maxMetrix[i][j] = max(top,left) + metrix[i][j];
        }
    }
    return maxMetrix[raw-1][col-1];
}
function max(val1,val2){
    if(val1 == undefined&&val2 == undefined){
        return 0;
    }else if(val1 == undefined||val2 == undefined){
        return val1==undefined?val2:val1;
    }else{
        return val1>val2?val1:val2;
    }
}
let res = findMaxValue(metrix);
console.log(res); 
//改进版
var metrix = [
    [1,10,3,8],
    [12,2,9,6],
    [5,7,4,11],
    [3,7,16,5]
]
function findMaxValue(metrix){
    let top,left;
    var dp = [];
    let raw = metrix.length;
    let col = metrix[0].length;
    for(let i=0;i<raw;i++){
        for(j=0;j<col;j++){
            top = undefined;
            left = undefined;
            if(i===0&&j===0){
                dp[j] = metrix[i][j];
            }
            if(i>0){
                top = dp[j];
            }
            if(j>0){
                left = dp[j-1];
            }
            dp[j] = max(top,left) + metrix[i][j];
        }
    }
    return dp[col-1];
}
function max(val1,val2){
    if(val1 == undefined&&val2 == undefined){
        return 0;
    }else if(val1 == undefined||val2 == undefined){
        return (val1==undefined?val2:val1);
    }else{
        return val1>val2?val1:val2;
    }
}
let res = findMaxValue(metrix);
console.log(res);