var stack = [];
var top = -1;
var minStack = [];
var minTop = -1;

//push
function push(x){
    stack[++top]  = x;
    if(minTop==-1){
        minStack[++minTop] = x;
    }else{
        if(minStack[minTop]>=x){
            minStack[++minTop] = x;
        }else{
            var temp = minStack[minTop];
            minStack[++minTop] = temp;
        }
    }
}
//pop
function pop(){
    if(stack.top!=-1){
        minStack[minTop--];//辅助栈数据也弹出
        return stack[top--];
    }
}
function min(){
    return minStack[minTop];//直接返回栈顶元素即可
}