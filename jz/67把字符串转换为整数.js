// //'' //null //'+' '-' //'+23+' '-23-' //'+2' '-2' //'23l0p'
var str = '18446744073709551615';
function strToInt(str){
    let res = '';
    //null ''
    if(str == null||str == ''){
        return null;
    }
    //只有一个+-号的
    if(str.length === 1&&(str[0] === '+'||str[0] === '-')){
        return null;
    }
    //首位为+ -
    let positive = true;//判断正负数
    for(let i=0;i<str.length;i++){
        if(str[i]-0>=0&&str[i]-0<=9){
            res+=str[i];
        }else{
            if(i===0){
                if(str[i] === '+'){
                    positive = true;
                }else if(str[i] === '-'){
                    res+=str[i];
                    positive = false;
                }else{
                    return null;
                }
            }else{
                return null;
            }
        }
    }
    //判断是否在整数范围内
    try{
        return parseInt(res);
    }catch(err){
        return null;
    }
}
let res = strToInt(str);
console.log(res);
