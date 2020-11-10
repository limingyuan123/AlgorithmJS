function ListNode(x){
    this.val = x;
    this.next = null;
}

function delDupl(head){
    if(head == null){
        return null;
    }

    var node = new ListNode();
    var pre = new ListNode();
    pre = head;
    node = head.next;
    var value = head.val;
    while(node!=null){
        if(node.val === value){
            //删除链表某一节点前，先将数据存起来，该节点需要置null
            var delNode = node;
            pre.next = delNode.next;
            node = node.next;
            delNode = null;
        }else{
            value = node.val;
            node = node.next;
            pre = pre.next;
        }
    }
    return head;
}
