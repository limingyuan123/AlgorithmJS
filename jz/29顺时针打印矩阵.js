var matrix = [
    ['1', '2', '3', '4'],
    ['5', '6', '7', '8'],
    ['9', '10', '11', '12'],
    ['13', '14', '15', '16']
]
//思路：抓矩阵每圈的起始点，然后根据起始点打印各圈
var raw = 4,
    column = 4;

function printMatrix(matrix, raw, column) {
    if (raw === 0 || column === 0) {
        return false;
    }
    var endR = raw - 1;
    var endC = column - 1;
    for (let i = 0; i < raw; i++) {
        if (raw > i * 2 && column > i * 2) {
            printCircle(matrix, i, endR, endC);
        }else{
            return;
        }
        endR -= 1;
        endC -= 1;
    }
}

function printCircle(matrix, start, endR, endC) {
    var i = start;
    while (i <= endC) {
        console.log(matrix[start][i++]);
    }
    i = start+1;
    while (i <= endR) {
        console.log(matrix[i++][endC]);
    }
    i = endC-1;
    while (i >= start&&(endR-start)>0) {
        console.log(matrix[endR][i--]);
    }
    i = endR-1;
    while (i > start&&(endR-start)>1) {
        console.log(matrix[i--][start]);
    }
}
var res = printMatrix(matrix, raw, column);


//优化版 逻辑清晰
var arr = [
    
]
function printArr(arr){
    if(arr.length === 0||arr[0].length === 0){
        return null;
    }
    var raw = arr.length;
    var col = arr[0].length;
    var start = 0;
    var res = [];
    while(raw>start*2&&col>start*2){
        printCicle(arr,raw,col,start,res);
        start++;
    }
    return res;
}
function printCicle(arr,raw,col,start,res){
    var endc = col-start;
    var endr = raw-start;
    //一 左到右
    for(let i=start;i<endc;i++){
        res.push(arr[start][i]);
    }
    //二 上到下 首个不要
    if(endr>start+1){//至少两排
        for(let i=start+1;i<endr;i++){
            res.push(arr[i][endc-1])
        }
    }
    //三 右到左 首个不要
    if(endr>start+1&&endc>start+1){//至少两排两列
        for(let i=endc-2;i>=start;i--){
            res.push(arr[endr-1][i]);
        }
    }
    //四 下到上 首个与末尾不要
    if(endr>start+1&&endc>start+1){
        for(let i = endr-2;i>start;i--){
            res.push(arr[i][start]);
        }
    }
}
let res = printArr(arr);
console.log(res);