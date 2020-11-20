var array = [2,0,2,2,0];
function findArray(array){
    if(array.length === 0){
        return null;
    }
    var num = array[0];
    var flag = 1;
    for(let i=1;i<array.length;i++){
        if(array[i] === num){
            flag++;
        }else{
            flag--;
            if(flag === 0){
                num = array[i];
                flag = 1;
            }
        }
    }
    //找到flag大于0的后，判断该数字长度是不是大于数组一半
    if(flag>0){
        var times = 0;
        for(let i=0;i<array.length;i++){
            if(array[i] === num){
                times++;
            }
        }
        if(times>=(parseInt(array.length/2)+1)){
            return num;
        }else{
            return null;
        }
    }else{
        return null
    }
}
let res = findArray(array);
console.log(res);

//方法二：利用patation函数来写，运用中位数法
var array = [1,2,3,2,2,2,5,4,3];

function findNum(array) {
    if (array.length === 0) {
        return null;
    }
    var index = patition(array, 0, array.length - 1);
    flag = false;
    while (index != parseInt(array.length / 2)) {
        if (index > parseInt(array.length / 2)) {
            index = patition(array, 0, index - 1);
        } else {
            index = patition(array, index + 1, array.length - 1);
        }
    }
    if (index === parseInt(array.length / 2)&&isLengthOk(array,array[index])) {
        return array[index];
    }else{
        return null;
    }
}
function isLengthOk(array, num){
    var times = 0;
    for(let i=0;i<array.length;i++){
        if(array[i] === num){
            times++;
        }
    }
    if(times>parseInt(array.length/2)){
        return true;
    }else{
        return false;
    }
}
function patition(array, begin, end) {
    var tmp = array[begin];
    var flag = 0;
    while (begin < end) {
        if (flag === 0) {
            if (array[end] >= tmp) {
                end--;
            } else {
                array[begin] = array[end];
                begin++;
                flag = 1;
            }
        } else {
            if (array[begin] <= tmp) {
                begin++;
            } else {
                array[end] = array[begin];
                end--;
                flag = 0;
            }
        }
    }
    array[begin] = tmp;
    return begin;
}
var res = findNum(array);
console.log(res);