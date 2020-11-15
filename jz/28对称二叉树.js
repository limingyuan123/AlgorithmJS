function TreeNode(x) {
    this.val = x;
    this.lchild = null;
    this.rchild = null;
}
function symmetric(tree){
    var str1 = new Array();
    var str2 = new Array();
    preFind(tree,str1);
    unPreFind(tree,str2);

    //比较str1与str2
    for(let i=0;i<str1.length;i++){
        if(str1[i] != str2[i]){
            return false;
        }
    }
    return true;

}
function preFind(t,str){
    str.push(t.val);
    if(t == null){
        return;
    }        
    preFind(t.lchild,str);
    preFind(t.rchild,str);
}
function unPreFind(t,str){
    str.push(t.val);
    if(t == null){
        return;
    }        
    preFind(t.rchild,str);
    preFind(t.lchild,str);
}
//改进版
function index(tree){
    if(tree == null){
        return false;
    }
    return symmetric(tree,tree);
}

function symmetric(tree1,tree2){
    if(tree1 == null&&tree2 == null){
        return true;
    }

    if(tree1 == null||tree2 == null){
        return false;
    }

    if(tree1.val != tree2.val){
        return false;
    }

    return symmetric(tree1.lchild,tree2.rchild)&&symmetric(tree1.rchild,tree2.lchild);
}