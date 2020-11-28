var arr = [1,2,2,2,3,3,3,3,4]
function findNumTimes(arr, num){
    if(arr == null){
        return null;
    }
    if(arr.length === 0){
        return 0;
    }
    var map = new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            let n = map.get(arr[i]);
            map.set(arr[i], n+1);
        }else{
            map.set(arr[i], 1);
        }
    }
    for(let item of map.entries()){
        if(item[0] === num){
            return item[1];
        }
    }

}
let res = findNumTimes(arr,2);
console.log(res);