function LinkList(x){
    this.val = x;
    this.next = null;
}

function mergeList(h1,h2){
    var h3 = new LinkList();
    var node = h3;

    while(h1!=null&&h2!=null){
        if(h1.val<=h2.val){
            node.next = h1;
            h1 = h1.next;
            node = node.next;
        }else{
            node.next = h2;
            h2 = h2.next;
            node = node.next;
        }
    }
    if(h1!=null){
        node.next = h1;
    }
    if(h2!=null){
        node.next = h2;
    }
    return h3.next;
}