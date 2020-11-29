var arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,24,25,26];//0,1,2,4,5,6,7,8
var res;
function findEXNum(arr,n){
    if(arr.length === 0){
        return null;
    }
    if(arr.length === 1&&arr[0] != 0){
        return 0;
    }
    //二分法
    doubleFind(arr,0,n-1);
    console.log(res);
}
function doubleFind(arr,start,end){
    if(start<end){
        let mid = parseInt((start+end)/2);
        if(arr[mid] === mid){
            doubleFind(arr,mid+1,end);
        }else{
            doubleFind(arr, start,mid-1);
        }
    }else{
        if(arr[start] > start){
            res = start;
            return;
        }else{
            res = start+1;
            return;
        }
    }
    
}
let run = findEXNum(arr, 26);
console.log(run);