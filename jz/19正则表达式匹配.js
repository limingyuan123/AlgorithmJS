//模式
// var pattern = 'a.a';
var pattern = 'ab*a';
var str = 'aaa';
function match(str, pattern){
    if(str == null||pattern==null){
        return false;
    }
    // console.log(str + " " + (str[0]));
    return matchStr(str,pattern);
}

function matchStr(str, pattern){
    if(str === ""&&pattern ===""){
        return true;
    }

    if(str !=""&& pattern === ""){
        return false;
    }

    if(pattern[1] === "*"){
        if(pattern[0] === str[0]||(pattern[0] === '.'&&str[0] != "")){
            //0次||1次||多次
        return matchStr(str,pattern.substring(2))||
        matchStr(str, pattern(1), pattern.substring(2))||
        matchStr(str.substring(1), pattern);
        }else{
            return matchStr(str, pattern.substring(2));
        }
    }
    if(pattern[0] === '.'||(pattern[0] === str[0]&&str[0] != "")){
        return matchStr(str.substring(1), pattern.substring(1));
    }
    return false;
}
var res = match(str, pattern);
console.log(res);


//解法二，利用js的RegExp进行匹配
// function match(s, pattern){
//     var reg = RegExp("^" + pattern + "$");
//     return reg.test(s);
// }
// var res = match(str, pattern);
// console.log(res);