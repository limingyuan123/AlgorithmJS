function TreeNode(x) {
    this.val = x;
    this.lchild = null;
    this.rchild = null;
}

function findIsChild(tree1, tree2) {
    //对两者均前序遍历，如果前者遍历字符串包括后者，则后者为前者子结构
    var t1 = new Array();
    var t2 = new Array();
    preFind(tree1,t1);
    preFind(tree2,t2);

    //匹配t1与t2
    var flag1 = 0;
    var flag2 = 0;

    while(flag1<t1.length){
        if(t1[flag1] === t2[flag2]){
            flag1 ++;
            flag2 ++;
        }else{
            flag2 = 0;
            flag1 ++;
        }
        if(flag2 === t2.length){
            return true;
        }
    }
}
//前序遍历
function preFind(tree,t){
    if(tree == null){
        return;
    }
    t.push(tree.val);
    preFind(tree.lchild,t);
    preFind(tree.rchild,t);
}