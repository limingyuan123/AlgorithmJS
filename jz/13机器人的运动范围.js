//回溯法,计算机器人能到达多少格子
var rows = 3,cols = 4;//机器人到达([35,37]) == 18,到不了([35,38]) == 19
var matrix = new Array();
for(let i = 0;i < rows;i++){
    matrix[i] = new Array();
}
var k = 3;
var num = 0;//计数的需置为全局变量，否则回溯法只会记得当前的num
function findNum(rows,cols,matrix,k){
    if(matrix == null||rows < 1||cols < 1||k<0){
        return 0;
    }
    
    initMatrix(matrix,rows,cols);//初始化为0，当已被计数则置为1
    var res = RecallNum(matrix,0,rows,0,cols,k);
    return num;
}
//回溯法求范围
function RecallNum(matrix,row,rows,col,cols,k){
    if(row>=0&&row<rows&&col>=0&&col<cols&&matrix[row][col]!=1){
        if((row + col)<=k){
            matrix[row][col] = 1;
            num++;
            RecallNum(matrix,row+1,rows,col,cols,k);
            RecallNum(matrix,row,rows,col+1,cols,k);
            RecallNum(matrix,row-1,rows,col,cols,k);
            RecallNum(matrix,row,rows,col-1,cols,k);
        }else{
            return;
        }
    }
}
//初始化矩阵
function initMatrix(matrix,rows,cols){
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            matrix[i][j] = 0;
        }
    }
}
var res = findNum(rows,cols,matrix,k);
console.log(res);