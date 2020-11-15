function StackStruct(){
    var top = -1;
    var stack = [];
    var min = Number.MAX_VALUE;
}

//push
function push(x){
    var stack = new StackStruct();
    stack.stack[++top] = x;
    if(stack.min>x){
        stack.min = x;
    }
}
//pop
function pop(stack){
    if(stack.top!=-1){
        return stack.stack[top--];
        
    }
}