function TreeNode(x){
    this.val = x;
    this.lchild = null;
    this.rchild = null;
}
var max = 0;
function MainFUC(tree){
    if(tree == null){
        return null;
    }
    depth(tree,0);
    console.log(max);
}
function depth(tree,dp){
    if(tree!=null){
        dp++;
        if(dp>max){
            max = dp;
        }
        depth(tree.lchild, dp);
        dp--;
        depth(tree.rchild, dp);
    }
}

//优化版
function depth2(tree){
    if(tree == null){
        return 0;
    }
    var ldepth = depth2(tree.lchild);
    var rdepth = depth2(tree.rchild);
    return ldepth>rdepth?ldepth+1:rdepth+1;
}