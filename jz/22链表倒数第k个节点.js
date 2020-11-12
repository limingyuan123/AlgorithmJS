function LinkList(x){
    this.val = x;
    this.next = null;
}
//需遍历两次的解法
// function findEndK(head,k){
//     var length = 0;
//     var node = new LinkList();
//     node = head;
//     while(node.next!=null){
//         length++;
//     }
//     if(length<k){
//         return false;
//     }else{
//         node = head;
//         var length2 = length - k;
//         for(let i=0;i<length2;i++){
//             node = node.next;
//         }
//         return node.val;
//     }
// }
// var res = findEndK(head,k);
// return res;

//只遍历一次解法，注意代码要有鲁棒性
function findEndK(head,k){
    if(head == null||k<=0){
        return null;
    }
    var pre=head,end=head;
    var num = 0;
    while(end.next!=null){
        if(num<k-1){
            end = end.next;
            num++;
        }else{
            pre = pre.next;
            end = end.next;
        }
    }
    //k值大于总长情况
    if(num+1<k){
        return null;
    }
    return pre.val;
}