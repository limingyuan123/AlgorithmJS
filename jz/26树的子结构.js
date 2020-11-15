function TreeNode(x) {
    this.val = x;
    this.lchild = null;
    this.rchild = null;
}
//比较字符串法，此法有漏洞，当串值为特殊情况时不可行
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
//遍历两树法，不用比较字符串

function IsChild(tree1,tree2){
    if(!tree1||!tree2){
        return false;
    }

    if(tree1.val != tree2.val){
        return IsChild(tree1.lchild,tree2)||IsChild(tree1.rchild,tree2);
    }else{
        if(root(tree1,tree2)){
            return true;
        }else{
            return IsChild(tree1.lchild,tree2)||IsChild(tree1.rchild,tree2);
        }
    }
}

function root(tree1,tree2){
    if(!tree2){
        return true;
    }

    if(tree1&&tree2&&tree1.val == tree2.val){//tree1 tree2不为空
        return (root(tree1.lchild,tree2.lchild)&&root(tree1.rchild,tree2.rchild));
    }else{
        return false;
    }
    
}
