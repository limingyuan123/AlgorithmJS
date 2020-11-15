var stack1 = [1,2,3,4,5];
var stack2 = [4,5,3,2,1];
function judge(stack1,stack2){
    //创建辅助栈
    var stack3 = [];
    var top3 = -1;

    for(let i=0;i<stack2.length;i++){
        for(let j=0;j<stack1.length;j++){
            if(stack1[j]!=stack2[i]||stack2[i]!=stack3[top3]){
                stack3[++top3] = stack1[j];
            }else{
                continue;
            }
        }
    }
}