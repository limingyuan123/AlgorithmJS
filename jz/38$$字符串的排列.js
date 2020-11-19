//需要仔细研究，多多巩固
var str = ['a','b','c'];
function printStr(str){
    if(str.length === 0){
        return null;
    }
    print1to2(str,str);
}
//abc acb bac bca cab cba
function print1to2(str,begin){
    if(begin == ''){
        return str;
    }else{
        for(let pstr = begin;begin!='';begin++){
            let tmp = pstr;
            pstr = begin;
            begin = tmp;
            print1to2(str,begin.splice(1,begin.length-1));
            tmp = begin;
            begin = pstr;
            pstr = tmp;
        }
    }
}
let res = printStr(str);
console.log(res);