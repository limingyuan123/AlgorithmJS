var arr = [3,32,321];
function merge(arr){
    if(arr.length<1){
        return null;
    }
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i] + '';
    }

    //冒泡方法
    for(let i=arr.length-1;i>=0;i--){
        for(let j=0;j<i;j++){
            if(compare(arr[j],arr[j+1])){
                var tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    var res;
    for(let i=0;i<arr.length;i++){
        res+=arr[i];
    }
    return res;
    //字符串规则比较
}
function compare(s1,s2){
    //s1>s2 true
    var str1 = s1;
    var str2 = s2;
    while(str1.length>0&&str2.length>0){
        if(str1[0] === str2[0]){
            str1.substr();
            str2.substr();
        }else if(str1[0] > str2[0]){
            return true;
        }else{
            return false;
        }
    }
    if(str1.length>0){
        return true;
    }else{
        return false;
    }
}
let res = merge(arr);
console.log(res);