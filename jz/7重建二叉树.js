//前序 1 2 4 7 3 5 6 8 中序 4 7 2 1 5 3 8 6
function TreeNode(x){
    this.val = x;
    this.lchild = null;
    this.rchild = null;
}

var num1 = [1,2,4,7,3,5,6,8];
var num2 = [4,7,2,1,5,3,8,6];

//递归建树
function reconstruction(num1,num2){
    if(num1.length==0||num2.length == 0){
        return null;
    }
    //初始化根节点
    var n1 = num1[0];
    var tree = new TreeNode(n1);
    tree.lchild = null;
    tree.rchild = null;

    //定义新的num11与num22存储递归所用的数组
    var lnum11 = [];
    var rnum11=[];
    var lnum22 = [];
    var rnum22 = [];
    var lflag = 0;//计数
    var log = 1;
    for(let i=0;i<num2.length;i++){
        if(num2[i]!=n1&&log==1){
            lnum22.push(num2[i]);
            lflag++;
        }else{
            log = 2;
            continue;
        }
        if(log == 2){
            rnum22.push(num2[i]);
        }
    }
    //解决num1
    for(var i=1;i<num1.length;i++){
        if(lflag>0){
            lnum11.push(num1[i]);
            lflag--;
        }else{
            rnum11.push(num1[i]);
        }
    }
    //重建左右子树
    tree.lchild = reconstruction(lnum11,rnum22);
    tree.rchild = reconstruction(rnum11,rnum22);
    return tree;
}
var res = reconstruction(num1,num2);


//优化版，真正的建树以及打印出树
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function reConstructBinaryTree(pre, vin) {
    // write code here
    if (pre.length != vin.length || pre.length === 0 || vin.length === 0) {
        return null;
    }
    //递归来做
    var tree = subCreateTree(pre, vin, 0, pre.length - 1, 0, vin.length - 1);
    //打印出树
    printTree(tree);
}

function subCreateTree(pre, vin, l1, r1, l2, r2) {
    if (l1 > r1||l2 > r2) {
        return null;
    }
    var tree = new TreeNode(pre[l1]);
    for (var i = l2; i < r2; i++) {
        if (vin[i] === pre[l1]) {
            break;
        }
    }
    if(l1<r1){
        tree.left = subCreateTree(pre, vin, l1 + 1, i - l2 + l1, l2, i - 1);
    }
    if(l2<r2){
        tree.right = subCreateTree(pre, vin, i - l2 + l1 +1, r1, i + 1, r2);
    }
    return tree;
}
function printTree(tree){
    if(tree==null){
        return;
    }else{
        console.log(tree.val);
    }
    printTree(tree.left);
    printTree(tree.right);
}
reConstructBinaryTree([1,2,3,4,5,6,7],[3,2,4,1,6,5,7]);