function linkList(x){
    this.val = x;
    this.next = null;
}
function publicNode(h1,h2){
    if(h1 == null||h2 == null){
        return null;
    }
    var length1,length2;
    var node1 = h1,node2 = h2;
    while(node1!=null){
        length1++;
        node1 = node1.next
    }
    while(node2!=null){
        length2++;
        node2 = node2.next;
    }
    node1 = h1,node2 = h2;
    var length = (length1>length2?(length1-length2):(length2-length1));
    if(length>0){
        if(length1>length2){
            while(length!=0){
                node1 = node1.next;
            }
        }else{
            while(length!=0){
                node2 = node2.next;
            }
        }
    }
    while(node1!=node2&&node1!=null){
        node1 = node1.next;
        node2 = node2.next;
    }
    if(node1 == null){
        return null;
    }else{
        return node1;
    }
}