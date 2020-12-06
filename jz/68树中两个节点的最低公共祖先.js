//二叉树数据结构
function TreeNode(x){
    this.val = x;
    this.lchild = null;
    this.rchild = null;
}
//树数据结构
function Tree(x){
    this.val = x;
    this.child = [];
}
//链表数据结构
function LinkList(x){
    this.val = x;
    this.next = null;
}
//第一种情况 为二叉树，且为二叉搜索树
function findAncestors(tree, node1, node2){
    if(tree == null){
        return null;
    }
    let node = tree;
    while(node!=null){
        if((node.val>node1.val&&node.val<node2.val)||(node.val<node1.val&&node.val>node2.val)){
            return node;
        }else if(node.val > node1.val&&node.val > node2.val){
            node = node.lchild;
        }else{
            node = node.rchild;
        }
    }
    return null;    
}
//第二种情况 为任意树，有指向父节点的指针
//此种转换为求两个链表中第一个公共节点

//第三种情况 任意数且没有指向父节点的指针
//遍历树节点，看当前节点是否含有该两个节点，
//如果含有继续遍历他的子节点，直到该节点的子树含有这两个节点，
//但是他的子节点的子树不同时含有这两个子节点
function findAncestors2(tree, node1, node2){
    let link1 = new LinkList();
    let link2 = new LinkList();
    getLink(tree, node1, link1);
    getLink(tree, node2, link2);

    //求两个链表第一个公共节点
    let node = getFirstNode(link1,link2);
    return node;
}
function getLink(tree, node,link){
    //前序遍历树，得到node的路径
    if(tree == null){
        return;
    }
    if(tree === node){
        return true;
    }
    link.pushNode(tree);
    getLink(tree.child, node, link);
    if(tree.child == null){
        link.popNode();
    }
}
function getFirstNode(link1,link2){
    //见求两个链表的第一个公共节点
}