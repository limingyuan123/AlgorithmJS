var str = [2,4,1,8,5,10];
var k = 4;
function findMinK(str,k){
    if(str.length <k){
        return null;
    }
    //排序str
    for(let i=str.length-1;i>=0;i--){
        for(let j=0;j<i;j++){
            if(str[j]>str[j+1]){
                let tmp = str[j];
                str[j] = str[j+1];
                str[j+1] = tmp;
            }
        }
    }
    return str.slice(0,k);
}
let res = findMinK(str,k);
console.log(res);
//方法二：patiton函数法
var array = [1,2,3,2,2,2,5,4,3];//1 2 2 2 2 3 3 4 5
var k = 4;

function findMinK(array,k) {
    if (array.length === 0) {
        return null;
    }
    var index = patition(array,0,array.length-1);
    while(index!=(k-1)){
        if(index>(k-1)){
            index = patition(array,0,index-1);//这种情况只需排列前半部分即可
        }else{
            //这种情况只需排列后半部分即可
            index = patition(array,index+1,array.length-1);
        }
    }
    return array.slice(0,index+1);
    
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
var res = findMinK(array,k);
console.log(res);