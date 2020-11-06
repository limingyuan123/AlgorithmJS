function Node(x){
    this.val = x;
    this.next = null;
}
var head = new Node();
//初始化链表


// function printFromEndToHead(head){
//     var h2 = new Node();//定义一个新的链表，用于头插
//     var curr = head.next;
//     if(head!=null){
//         h2.val = head.val;
//         h2.next = null;
//     }
//     //头插
//     while(curr!=null){
//         curr.next = h2;
//         h2 = curr;
//     }
// }
//倒序数组法
// function printFromEndToHead(head){
//     var arr = [];
//     while(head!=null){
//         arr.push(head.val);
//         head = head.next;
//     }
//     for(let i=arr.length-1;i>=0;i--){
//         console.log(arr[i]);
//     }
// }

//栈法
// function printFromEndToHead(head){
//     var stack = [];
//     var top = -1;
//     while(head!=null){
//         stack[++top] = head.val;
//         head = head.next;
//     }
//     //顺序出栈
//     while(top!=-1){
//         console.log(stack[top--]);
//     }
// }

//递归法
function printFromEndToHead(head){
    if(head.next!=null){
        var ne = head.next;
        printFromEndToHead(ne);
    }
    console.log(head.val);
}

var res = printFromEndToHead(head);