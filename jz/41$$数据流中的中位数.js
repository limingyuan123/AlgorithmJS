var array = [1,2,3,4];

function findMiddle(array) {
    if (array.length === 0) {
        return null;
    }
    var index = patition(array,0,array.length-1);
    var flag;
    if(array.length%2 === 0){
        flag = 0;//偶数
    }else{
        flag = 1;//奇数
    }
    while(index!=parseInt(array.length/2)){
        if(index>parseInt(array.length/2)){
            index = patition(array,0,index-1);//这种情况只需排列前半部分即可
        }else{
            //这种情况只需排列后半部分即可
            index = patition(array,index+1,array.length-1);
        }
    }
    if(flag){
        return array[index];
    }else{
        //对index前的数找到一个最大值
        var max = maxNum(array.slice(0,index));
        return (array[index]+max)/2;
    }
}
function maxNum(array){
    for(let i=0;i<array.length;i++){
        let j = i+1;
        if(j<array.length){
            if(array[i]>array[j]){
                let tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
    return array[array.length-1];
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
var res = findMiddle(array);
console.log(res);

//需要了解最大堆最小堆