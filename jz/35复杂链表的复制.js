function LinkNode(x) {
    this.val = x;
    this.next = null;
    this.sibling = null;
}

function complexCopy(head) {
    if (head == null) {
        return null;
    }
    var map = new Map(); //用来存储sibling的位置以及值
    var i = 0;
    var pre = new LinkNode();
    var preHead = pre;
    pre.val = head.val;
    pre.next = null;
    map.set(i++, head.sibling);
    var node = head.next;

    while (node != null) {
        var newNode = new LinkNode();
        newNode.val = node.val;
        newNode.next = null;
        map.set(i++, node.sibling);
        pre.next = newNode;
        node = node.next;
    }

    node = preHead;
    //迭代map,链接sibling
    for (var val of map.values()) {
        node.sibling = val;
        node = node.next;
    }

    return preHead;
}