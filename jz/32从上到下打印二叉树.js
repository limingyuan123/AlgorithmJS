function TreeNode(x){
    this.val = x;
    this.lchild = null;
    this.rchild = null;
}
function printTree(tree){
    if(tree == null){
        return null;
    }
    //定义队列
    var queue = [];
    queue.push(tree);
    while(queue.length>0){
        //出队
        var node = queue.shift(0);
        console.log(node.val);
        //入队
        if(node.lchild!=null){
            queue.push(node.lchild);
        }
        if(node.rchild!=null){
            queue.push(node.rchild);
        }
    }
} 