function TreeNode(x){
    this.val = x;
    this.lchild = null;
    this.rchild = null;
}
function serization(tree){
    var str = [];
    if(tree == null){
        return null;
    }
    pre(tree,str);
    return str;
}
function unSerization(head,str){
    if(str.length === 0){ 
        return null;
    }
    var num = str.shift();
    if(num>=0&&num<=9){
        head = new TreeNode();//生成具体的树节点
        head.val = num;
        head.lchild = null;
        head.rchild = null;
        unSerization(head.lchild,str);//生成左子树
        unSerization(head.rchild,str);//生成右子树
    }
}

function pre(node,str){
    str.push(node);
    pre(node.lchild,str);
    pre(node.rchild,str);
}

var res = serization(tree);//序列化结果
var res1 = unSerization(head,res);
console.log(head);//打印出反序列化结果