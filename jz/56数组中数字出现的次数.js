var arr = [2, 4, 3, 6, 3, 2, 5, 5];

function findNum(arr) {
    if (arr.length === 2) {
        return arr;
    }
    var map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            let n = map.get(arr[i]);
            map.set(arr[i], n + 1);
        }else{
            map.set(arr[i],1);
        }
    }
    var num = [];
    for (let item of map.entries()) {
        if (item[1] === 1) {
            num.push(item[0]);
        }
    }
    return num;
}
let res = findNum(arr);
for (let i = 0; i < res.length; i++) {
    console.log(res[i]);
}