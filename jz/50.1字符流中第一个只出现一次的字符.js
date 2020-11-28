var map = new Map();

function insert(ch){
    if(map.has(ch)){
        let flag = map.get(ch);
        map.set(ch,++flag);
    }else{
        map.set(ch,1);
    }
}
function getFirstCh(){
    if(map.size == 0){
        console.log(null);
        return null;
    }
    for(let item of map.entries()){
        if(item[1] === 1){
            console.log(item[0]);
            return item[0];
        }
    }
    return null;
}
//test
getFirstCh();
insert('a');
getFirstCh();
insert('b');
getFirstCh();
insert('a');
getFirstCh();