var str = '3.1416';
//A[.[B]][e|EC]  /  .B[e|EC]
function matchNumber(str){
    //匹配+-
    if(str[0] === "+"||str[0] === "-"){
        if(str[1] ==="+"||str[1] === "-"){
            return false;
        }else{
            str = str.substring(1);
            for(let i=0;i<str.length;i++){
                if(str[i] === "."){
                    str[i+1]
                }
            }
        }
    }else{//匹配字符串前无+-

    }
}
var res = matchNumber(str);
console.log(res);