function findNumS(s){
    if(s<3){
        return null;
    }
    var small = 1,big = 2;
    var arr = [];
    arr.push(small);
    arr.push(big);
    var sum = small+big;
    while(small<big){
        if(sum === s){
            printArr(arr);
            big+=1;
            sum+=big;
            arr.push(big);
        }else if(sum<s){
            big+=1;
            sum+=big;
            arr.push(big);
        }else{
            arr.shift();
            sum-=small;
            small+=1;
        }
    }
}
function printArr(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
let res = findNumS(9);