//暴力法
var arr = [1,-2,3,10,-4,7,2,-5];
function findMaxSum(arr){
    //暴力法
    var sum = 0;
    var max = Number.MIN_VALUE;
    for(let i=0;i<arr.length-1;i++){
        sum = arr[i];
        for(let j=i+1;j<arr.length;j++){
            sum += arr[j];
            if(sum > max){
                max = sum;
            }
        }
    }
    return max;
}
let res = findMaxSum(arr);
console.log(res);
//解法二：O(n)
var arr = [1, -2, 3, 10, -4, 7, 2, -5];

function findMaxSum(arr) {
    if (arr.length === 0) {
        return null;
    }
    var sum = 0;
    var max;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        // max = sum;
        //如果继续累加数字变小则抛弃
        if (sum < 0 && i < arr.length) {
            sum = 0;
        } else if (i < arr.length && arr[i + 1] < 0) {
            max = sum;
        }
    }
    if (max <= sum) {
        return sum;
    } else {
        return max;
    }
}
let res = findMaxSum(arr);
console.log(res);