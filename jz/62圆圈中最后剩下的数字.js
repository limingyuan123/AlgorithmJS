function LinkList(x){
    this.val = x;
    this.next = null;
}

var k = 3;
function findNum(node,k){
    if(node == null){
        return null;
    }
    let pre = node;
    
    while(node.next!=node){
        for(let i=0;i<k-1;i++){
            pre = node;
            node = node.next;
        }
        pre.next = node.next;
        node = node.next;
        pre = node;
    }
    return node.val;
}
//优化解法
/**
 * 
 * @param {n个节点} n 
 * @param {删除第m个节点} m 
 */
function Last(n,m){
    if(n<1||m<1){
        return -1;
    }
    let last = 0;
    for(let i=2;i<=n;i++){
        last = (last+m)%i;
    }
    return last;
}