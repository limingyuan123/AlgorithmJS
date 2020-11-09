//回溯法（深度优先遍历），由此题深入理解回溯法
var matrix = [
            ['a','b','t','g'],
            ['c','f','c','s'],
            ['j','d','e','h']
]
var path = ['b','f','c','h'];
function RecallPath(matrix,rows,cols,path){
    if(matrix == null||rows<1||cols<1||path == null){
        return 0;
    }
    //为是否访问的visit表初始化
    var visit = new Array();
    for(let i = 0;i<rows;i++){
        visit[i] = new Array();
    }
    initVisit(visit,rows,cols);
    var pathLength = 0;
    //此双重循环目的是找到第一个符合的起点，真正回溯找路径是回溯算法来做
    for(let row=0;row<rows;row++){
        for(let col=0;col<cols;col++){
            if(Recall(matrix,visit,row,rows,col,cols,path,pathLength)){
                console.log("yes you can");
                return 1;
            }
        }
    }
    console.log("oh my god");
    return 0;    
}
//回溯算法
function Recall(matrix,visit,row,rows,col,cols,path,pathLength){
    var hasPath = 0;
    if(pathLength === path.length){
        return 1;
    }
    if(row>=0&&row<rows&&col>=0&&col<cols&&
        matrix[row][col] === path[pathLength]&&visit[row][col] != 1){
        pathLength ++;

        //找到后将该点数据visit置为1
        visit[row][col] = 1;
        hasPath = (Recall(matrix,visit,row+1,rows,col,cols,path,pathLength)||
        Recall(matrix,visit,row-1,rows,col,cols,path,pathLength)||
        Recall(matrix,visit,row,rows,col+1,cols,path,pathLength)||
        Recall(matrix,visit,row,rows,col-1,cols,path,pathLength));

        if(!hasPath){
            --pathLength;
            visit[row][col] = 0;
        }
    }
    return hasPath;
}
//初始化visit
function initVisit(visit,rows,cols){
    for(let row = 0;row < rows;row++){
        for(let col = 0;col < cols;col++){
            visit[row][col] = 0;
        }
    }
}
var exist = RecallPath(matrix,3,4,path);
console.log(exist);