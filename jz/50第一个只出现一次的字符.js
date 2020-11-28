var str = "aa啊";
function findFirst(str){
    if(str.length === 0){
        return null;
    }
    var map = new Map();
    for(let i=0;i<str.length;i++){
        if(map.has(str[i])){
            let n = map.get(str[i]);
            map.set(str[i], ++n)
        }else{
            map.set(str[i], 1);
        }
    }
    var entries = map.entries();
    for(var item of entries){
        //item是一个数组，entries里是一串数组，所以用取数组值的方式取值
        if(item[1] === 1){
            return item[0];
        }
    }
    return null;
}
var res = findFirst(str);
console.log(res);