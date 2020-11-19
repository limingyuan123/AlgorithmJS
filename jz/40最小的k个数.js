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