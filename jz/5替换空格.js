// we are happy -> %20
//不在本串操作
/*
var s = "we are happy.";
var ss = "";
for(let i=0;i<s.length;i++){
    if(s[i] != ' '){
        ss+=s[i];
    }else{
        ss+="%20";
    }
}
console.log(ss);
return ss;
*/

//在本串操作
function findSpace() {
    var s = "we are happy.";
    var p1 = s.length - 1;
    var num = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            num++;
        }
    }

    var p2 = p1 + num * 3;
    var p3 = p2;
    for (let i = 0; i < num * 3; i++) {
        s += "*";
    }
    for (let i = p3; i >= 0; i--) {
        if (s[p1] != " ") {
            s[p2] = s[p1];
            console.log(s.length);
            p2--;
            p1--;
        } else {
            s[p2--] = '0';
            s[p2--] = '2';
            s[p2--] = '%';
            p1--;
        }
    }
    return s;
}
var res = findSpace();
console.log(res);