var str = '123.45e+6';
//A[.[B]][e|EC]  /  .B[e|EC]
function matchNumber(str){
    var match = false;
    if(str == null){
        return false;
    }

    //匹配+-
    if((str[0] === "+"||str[0] === "-")&&(str[1] ==="+"||str[1] === "-")){
            return false;
    }

    //匹配整数
    var flag = 0;
    for(let i=0;i<str.length;i++){
        if(str[i] === '.'){
            flag = i;
            break;
        }
    }
    if(flag>0){
    match = matchUnsignInter(0,str.substring(flag));
    str = str.substring(flag+1);
    }

    //匹配小数
    flag = 0;
    for(let i=0;i<str.length;i++){
        if(str[i] === 'e'||str[i] === 'E'){
            flag = i;
            break;
        }
    }
    if(flag>0){
        match = matchInter(0,str.substring(flag));
        str = str.substring(flag+1);
    }

    //匹配指数
}
function matchInter(str){
    for(let i = 0;i < str.length;i++){
        if(str[i] - '0'>=0&&str[i] - '0'<=9){
            continue;
        }else{
            return false;
        }
    }
    return true;
}
function matchUnsignInter(str){
    for(let i = 0;i < str.length;i++){
        if(str[i] - '0'>=0&&str[i] - '0'<=9){
            continue;
        }else{
            return false;
        }
    }
    return true;
}
var res = matchNumber(str);
console.log(res);