var arr = [-3,-1,1,3,4];
var flag;
function findNum(arr){
    if(arr.length === 0){
        console.log("error");
    }
    //二分查找法，优化时间复杂度
    let num = findDouble(arr, 0, arr.length-1);
    console.log(flag);
}
function findDouble(arr, start, end){
    let mid = parseInt((start+end)/2);
    if(start<=end){
        if(mid!=arr[mid]){
            findDouble(arr,start,mid-1);
            findDouble(arr, mid+1, end);
        }else{
            flag = mid;
            return;
        }
    }
}
let res = findNum(arr);