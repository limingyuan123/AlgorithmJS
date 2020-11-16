function TreeNode(x){
    this.val = x;
    this.lchild = null;
    this.rchild = null;
}

function printRawTree(tree){
    if(tree == null){
        return null;
    }
    var queue = [];
    //加上层号进行hash存储
    var hash = {
        key:tree,
        val:0
    }
    queue.push(hash);
    var str = "";
    var level = 0;
    while(queue.length>0){
        //出队
        var node = queue.shift(0);
        if(node.val === level){
            str += node.key.val;
        }else{
            console.log(str);
            str = "";
            level++;
            str+=node.key.val;
        }
        //入队
        if(node.lchild!=null){
            hash = {
                key:node.lchild,
                val:(node.val+1)
            }
            queue.push(hash);
        }

        if(node.rchild!=null){
            hash = {
                key:node.lchild,
                val:node.val++
            }
            queue.push(hash);
        }
    }
}