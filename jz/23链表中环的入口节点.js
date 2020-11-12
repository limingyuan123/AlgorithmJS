function LinkList(x) {
    this.val = x;
    this.next = null;
}
function findEnterNode(head) {
    if(head.next == null){
        return null;
    }
    //判断是否有环
    var quick = head,
        slow = head;
    var exist = false;
    quick = head.next;
    while (quick.next != null) {
        if (slow == quick) {
            exist = true;
            break;
        }
        if (quick.next.next != null) {
            quick = quick.next.next;
            slow = slow.next;
        }else{
            exist = false;
            break;
        }
    }
    if (exist) {
        //此时两者均在环内，一个动一个不动，再次碰面即可算出环节点数
        var num = 1;
        quick = quick.next;
        while(quick!=slow){
            quick = quick.next;
            num++;
        }

        quick = head;
        slow = head;
        //quick先走num位
        for(let i=0;i<num;i++){
            quick = quick.next;
        }

        //两者一起走，知道相遇于入口点出
        while(quick!=slow){
            quick = quick.next;
            slow = slow.next;
        }
        return quick;
    }else{
        return null;
    }

}
var res = findEnterNode(head);
console.log(res);