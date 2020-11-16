function TreeNode(x){
    this.val = x;
    this.lchild = null;
    this.rchild = null;
}

var str = [5,7,6,9,11,10,8];
function isExist(tree, str){
    if(tree == null){
        return null;
    }
    
    var treeStr = [];
    behind(tree, treeStr);
    //比较字符串
    for(let i = 0;i<str.length;i++){
        if(str[i]!=treeStr[i]){
            return false;
        }
    }
    return true;
}

function behind(node, treeStr){
    if(node == null){
        return;
    }
    treeStr.push(node.val);
    behind(node.lchild,treeStr);
    behind(node.rchild,treeStr);
}
var res = isExist(tree,str);

//利用二叉搜索树来写，*此题不是很熟练
var str = [5,7,6,9,11,10,8];
function isExist(str,length){
    if(str == null||length <= 0){
        return false;
    }
    
    var val = str[length-1];
    for(var i=0;i<length-1;i++){
        if(str[i]>val){
            break;
        }
    }
    for(var j=i;j<length-1;j++){
        if(str[j] < val){
            return false;
        }
    }
    var left = true;
    if(i>0){
        left = isExist(str,i);
    }

    var right = true;
    if(i<length-1){//i相当于右侧开头，左侧结尾+1
        right = isExist(str+i,length-i-1);
    }
    return left&&right;
}

var res = isExist(str,str.length);
console.log(res);