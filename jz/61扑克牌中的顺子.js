var arr = [0,4,0,5,0];
function isOrder(arr){
    //计算多少*
    let flag = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 0){
            flag++;
        }
    }
    //排序数组
    for(let i=arr.length-1;i>=0;i--){
        for(let j=0;j<i;j++){
            //对子
            if(arr[j]===arr[j+1]&&arr[j]!=0){
                return false;
            }else if(arr[j]>arr[j+1]){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    for(let i=flag;i<arr.length-1;i++){
        if(arr[i+1] - arr[i] === 1){
            continue;
        }else if(((arr[i+1] -arr[i] === 2)&&flag >= 1)){
            flag--;
        }else if((arr[i+1] - arr[i] === 3)&&flag >= 2){
            flag-=2;
        }else{
            return false;
        }
    }
    return true;
}
let res = isOrder(arr);
console.log(res);