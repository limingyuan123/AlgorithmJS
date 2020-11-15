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