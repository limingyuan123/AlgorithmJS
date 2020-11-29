//中序遍历
function TreeNode(x){
    this.val = x;
    this.lchild = null;
    this.rchild = null;
}
var arr;
function findKNode(tree,k){
    if(tree == null||k<1){
        return null;
    }
    //中序遍历二叉树
    mid(tree);
    return arr[k-1];
}
function mid(tree){
    if(tree!=null){
        mid(tree.lchild);
        arr.push(tree.val);
        mid(tree.rchild);
    }    
}