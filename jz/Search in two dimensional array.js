var rows = 4;
var columuns = 4;
var number = 7;
var nums = [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15]
]
//开始查找
if (rows > 0 && columuns > 0) {
    var row = 0;
    var columun = columuns - 1; //确定行列初始位置
    while (row < rows && columun >= 0) {
        if (nums[row][columun] == number) {
            console.log("true");
            return true;
        } else if (nums[row][columun] > number) {
            columun--;
        } else if (nums[row][columun] < number) {
            row++;
        }
    }
    console.log("false");
    return false;
}