var str1 = [1, 2, 3, 4, 5];
var top1 = 0;
var str2 = [4, 3, 5, 1, 2];
var top2 = 0;

function judge(str1, str2) {
    if (str1 == null || str2 == null) {
        return null;
    }

    if (str1.length != str2.length) {
        return null;
    }

    if (str1.length == 0 || str2.length == 0) {
        return true;
    }
    //创建辅助栈
    var stack3 = [];
    var top = -1;
    stack3[++top] = str1[top1++];

    while (top != -1) {
        //top与当前出栈序列比较
        if (stack3[top] === str2[top2] && top2 < str2.length) {
            top--;
            top2++;
        } else {
            if (top1 < str1.length) {
                stack3[++top] = str1[top1++];
            } else {
                return false;
            }
        }
    }
    return true;

}
var res = judge(str1, str2);
console.log(res);