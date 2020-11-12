function LinkList(x) {
    this.val = x;
    this.next = null;
}
function reverseList(head){
    if(head == null){
        return null;
    }
    var n1 = head.next;
    head.next = null;//断开头结点
    while(n1!=null){
        //头插
        n2 = n1.next;
        n1.next = head;
        head = n1;
        n1 = n2;
    }
    return head;
}