function TreeNode(x){
    this.val = x;
    this.lchild = null;
    this.rchild = null;
}

function DLinkList(x){
    this.val = x;
    this.pre = null;
    this.next = null;
}

function exList(tree){
    if(tree == null){
        return null;
    }
    //中序遍历，拿到串值
    var str = [];
    mid(tree,str);
    //构建链表
    var head = new DLinkList();
    head.val = str[0];
    head.next = null;
    var pre = head;
    for(let i=1;i<str.length;i++){
        var node = new DLinkList();
        node.val = str[i];
        node.next = null;
        node.pre = pre;
        pre.next = node;
        pre = pre.next;
    }
    return head;
}
function mid(node,str){
    if(node == null){
        return null;
    }
    mid(node.lchild,str);
    str.push(node.val);
    mid(node.rchild,str);
}