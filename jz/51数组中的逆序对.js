var arr = [7,5,6];
function findReverseOrder(arr){
    let flag = 0;
    for(let i=0;i<arr.length;i++){
        let num = arr[i];
        for(let j=i+1;j<arr.length;j++){
            if(num>arr[j]){
                flag++;
            }
        }
    }
    return flag;
}
let res = findReverseOrder(arr);
console.log(res);