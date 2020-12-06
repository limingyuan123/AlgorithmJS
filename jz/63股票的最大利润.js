var arr = [9, 11, 8, 5, 7, 12, 16, 14];
//暴力法
function findMaxProfile(arr) {
    if (arr.length <= 1) {
        return null;
    }
    let max = arr[1] - arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (max < arr[j] - arr[i]) {
                max = arr[j] - arr[i];
            }
        }
    }
    return max;
}
let res = findMaxProfile(arr);
console.log(res);
//优化版，时间复杂度O(1)
var arr = [9,11,8,5,7,12,16,14];
function findMaxProfile1(arr){
    if(arr.length<2){
        return null;
    }
    let min = arr[0];
    let max = arr[1] - arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i] - min>max){
            max = arr[i] - min;
        }
        if(min >arr[i]){
            min = arr[i];
        }                            
    }
    return max;
}
let res = findMaxProfile1(arr);
console.log(res);