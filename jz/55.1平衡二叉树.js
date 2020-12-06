function TreeNode(x){
    this.val = x;
    this.lchild = null;
    this.rchild = null;
}
function isBalance(node){
    if(node == null){
        return true;
    }
    var ldepth = isBalance(node.lchild);
    var rdepth = isBalance(node.rchild);
    if(ldepth>(rdepth+1)||rdepth>(ldepth+1)){
        return false;
    }
    return isBalance(node.lchild)&&isBalance(node.rchild);
}
//优化版
function isBalance2(node,depth){
    if(node == null){
        depth = 0;
        return true;
    }
    var left,right;
    if(isBalance2(node.lchild,left)&&isBalance2(node.rchild,right)){
        var dif = left-right;
        if(dif<=1&&dif>=-1){
            depth = 1 + (left>right?left:right);
            return true;
        }
    }
    return false;                        
}