function ListNode(x) {
    this.val = x;
    this.next = null;
}
/**
 * 思路：可以通过不找链表待删节点的前一个节点来删除
 * 可以通过该节点的后一个节点进行替换删值操作
 */
function delNode(head, node){
    //分三种情况讨论
    if(head === node){//删除头结点
        head = null;
    }else if(node.next == null){//删除尾结点
        var list = head;
        while(list.next!=node){
            list = list.next;
        }
        list.next = null;
        node = null;
    }else{
        var nodeN = new ListNode();
        nodeN = node.next;
        node.val = nodeN.val;
        node.next = nodeN.next;
        nodeN.next = null;
    }
    return head;
}

var res = delNode(head, node);
console.log(res);