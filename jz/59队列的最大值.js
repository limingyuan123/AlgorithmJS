//滑动窗口的最大值
var arr = [2,3,4,2,6,2,5,1];
function findWindow(arr,win){
    if(arr.length < win){
        return null;
    }
    var end = 2;
    var maxArr = [];
    while(end<arr.length){
        let max = arr[end];
        if(arr[end-1]>max){
            max = arr[end-1];
        }
        if(arr[end-2]>max){
            max = arr[end-2];
        }
        maxArr.push(max);
        end++;
    }
    for(let i=0;i<maxArr.length;i++){
        console.log(maxArr[i]);
    }
}
let res = findWindow(arr, 3);