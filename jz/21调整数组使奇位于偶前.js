//空间换时间，用2个新数组来实现
var array = [5,6,4,3,9,7];
function operationQueue(array){
    var newArray = new Array();
    var newArray1 = new Array();
    for(let i=0;i<array.length;i++){
        if(array[i]%2 === 0){
            newArray.push(array[i]);
        }else{
            newArray1.push(array[i]);
        }
    }
    for(let i=0;i<newArray.length;i++){
        newArray1.push(newArray[i]);
    }
    return newArray1;
}
var res = operationQueue(array);
console.log(res);

//双指针法
var array = [5,6,4,3,9,7];
function operationQueue(array){
    var left = 0,right = array.length-1;
    if(left === right){
        return array;
    }
    while(left<right){
        if(array[left]%2===1){
            left++;
        }
        if(array[right]%2===0){
            right--;
        }
        if(array[left]%2 === 0&&array[right]%2 === 1&&left<right){
            let temple = array[left];
            array[left] = array[right];
            array[right] = temple;
        }
    }
    return array;
}
var res = operationQueue(array);
console.log(res);