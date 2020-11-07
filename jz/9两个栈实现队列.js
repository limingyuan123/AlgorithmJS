//需要实现两个函数appendTail与deleteHead
//思路：入队：stack1不满  直接入（js应该stack不会满，所以直接入）
//出队：stack2空： stack1 的注入stack2，stack2 出栈 stack2不空：直接出栈
var stack1 = [];
top1 = -1;
var stack2 = [];
top2 = -1;
function appendTail(x){
    stack1[++top1] = x;
}
function deleteHead(){
    if(top2==-1){
        //将stack1 的注入stack2
        if(top1==-1){
            return null;//出队失败,全部为空，无法出队
        }else{
            while(top1>-1){
                stack2[++top2] = stack1[top1--];
            }
        }
        return stack2[top2--];
    }else{
        return stack2[top2--];
    }
}

//Two queues to implement stack，扩展做


