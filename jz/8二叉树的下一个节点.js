function TreeNode(x) {
    this.val = x;
    this.lchild = null;
    this.rchild = null;
    this.parent = null;
}

function nextNode(node) {
    var res = new TreeNode();
    //右子节点不为空
    if (node.rchild != null) {
        //右子节点的最左节点
        res = node.rchild;
        if (res.lchild == null) {
            return res;
        } else {
            while (res.lchild != null) {
                res = res.lchild;
            }
        }
    }else{
        //右子节点为空，且该节点为左子节点
        if(node.parent.lchild === node){
            return node.parent;
        }else{
            var flag = 0;
            //右子节点为空，且该节点为右子节点
            while(node.parent!=null){
                if(node.parent.rchild === node){
                    node = node.parent;
                }else{
                    flag = 1;
                    return node.parent;
                }
            }
            if(flag == 0){
                return null;//此时该节点为最后一个节点，无下一个节点
            }
        }
    }
}