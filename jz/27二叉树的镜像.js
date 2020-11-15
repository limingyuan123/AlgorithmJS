function TreeNode(x) {
    this.val = x;
    this.lchild = null;
    this.rchild = null;
}

function findImage(tree) {
    if (tree == null) {
        return;
    }

    if (tree.lchild == null && tree.rchild == null) {
        return;
    }
    if (tree.lchild != null || tree.rchild != null) {
        var t = new TreeNode();
        t = tree.lchild;
        tree.lchild = tree.rchild;
        tree.rchild = t;
        t = null;
    }
    if (tree.lchild) {
        findImage(tree.lchild);
    }
    if (tree.rchild) {
        findImage(tree.rchild);
    }
}