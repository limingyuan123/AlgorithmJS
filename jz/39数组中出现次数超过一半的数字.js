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