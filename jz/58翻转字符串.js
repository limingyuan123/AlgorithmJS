var str = 'Ii am a student.'

function reverseStr(str) {
    if(str == null){
        return null;
    }
    var newStr = reverse(str.split(""), 0, str.length - 1);
    let end = 0;
    let start = 0;
    while (end < newStr.length) {
        if (newStr[end] === ' ') {
            reverse(newStr, start, end - 1);
            end++;
            start = end;
        } else {
            end++;
        }
    }
    reverse(newStr, start, end - 1);
    console.log(newStr.join(""));
}

function reverse(str, start, end) {
    for (let l = start, r = end; l < r; l++, r--) {
        let tmp = str[l];
        str[l] = str[r];
        str[r] = tmp;
    }
    return str;
}
let res = reverseStr(str);