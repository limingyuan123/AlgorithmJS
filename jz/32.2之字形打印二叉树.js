function TreeNode(x){
    this.val = x;
    this.lchild = null;
    this.rchild = null;
}

//偶数位右到左，奇数位左到右
function printZTree(tree){
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
        var hash1 = {
            key:node.lchild,
            val:(node.val+1)
        }
        var hash2 = {
            key:node.rchild,
            val:(node.val+1)
        }
        if(level%2 === 0){
            //先左后右
            if(node.lchild!=null){
                queue.push(hash1);
            }
            if(node.rchild!=null){
                queue.push(hash2);
            }
        }else{
            if(node.rchild!=null){
                queue.push(hash2);
            }
            if(node.lchild!=null){
                queue.push(hash1);
            }
        }            
    }
}