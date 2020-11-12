// var str = '123.45e+6';
var str = '1a3.14';
//A[.[B]][e|EC]  /  .B[e|EC]
function matchNumber(str){
    if(str == null){
        return false;
    }

    //匹配+-
    if((str[0] === "+"||str[0] === "-")&&(str[1] ==="+"||str[1] === "-")){
            return false;
    }

    //匹配整数
    var match1 = true;
    var flag = 0;
    var m = false;
    for(let i=0;i<str.length;i++){
        if(str[i] === '.'){
            flag = i;
            m = true;
            break;
        }
    }
    if(flag>0){
    match1 = matchInter(str.substring(0,flag));
    }
    if(flag>0||m){        
    str = str.substring(flag+1);
    }
    var match2 = true;
    var m2 = false;
    //匹配小数
    flag = 0;
    for(let i=0;i<str.length;i++){
        if(str[i] === 'e'||str[i] === 'E'){
            flag = i;
            m2 = true;
            break;
        }
    }
    if(flag>0){
        match2 = matchUnsignInter(0,str.substring(flag));
    }
    if(flag>0||m2){        
        str = str.substring(flag+1);
    }

    //匹配指数
    match3 = matchInter(str);
    return match1&&match2&&match3;
}
function matchInter(str){
    if(str[0] === "+" || str[0] === "-"){
        str = str.substring(1);
    }
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