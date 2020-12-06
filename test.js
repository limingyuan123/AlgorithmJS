var array = [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];
var target = 16;
function Find(target, array)
{
    // write code here
    if(array == null||target == null||array.length == 0){
        return false;
    }
    let raw = array.length;
    let col = array[0].length;
    if(raw == null||col == null){
        return false;
    }
    for(let i=0,j=col-1;i<raw,j>=0;){
        if(target === array[i][j]){
            return true;
        }else if(target<array[i][j]){
            j--;
        }else{
            i++;
        }
    }
    return false;
}
let res = Find(target,array);
console.log(res);