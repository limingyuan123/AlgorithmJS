function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead)
{
    // write code here
    if(pHead == null){
        return null;
    }
    var hash = new Map();
    //首次遍历，将random存起来
    var node = pHead.next;
    var i=0;
    hash.set(i++,pHead.random);
    var cHead = new RandomListNode(pHead.val);
    var pre = cHead;
    while(node!=null){
        var newNode = new RandomListNode(node.val);
        pre.next = newNode;
        pre = newNode;
        hash.set(i++,node.random);
        node = node.next;
    }    
    //连接random
    node = cHead;
    for(let item in hash.values()){
        node.random = item;
        node = node.next;
    }
    return cHead;
}
module.exports = {
    Clone : Clone
};