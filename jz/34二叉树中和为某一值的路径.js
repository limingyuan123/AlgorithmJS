function TreeNode(x){
    this.val = x;
    this.lchild = null;
    this.rchild = null;
    // this.flag = 0;
}
var res = [];
function findPath(root, number, res, curr){
    res.push(root.val);
    curr += root.val;
    if(root.lchild == null&&root.rchild == null&&curr === number){
        printRes(res);
        // return;
        // root = null;//只需删除路径中的最后一个节点即可，不需要删除树中的
    }
   
    if(root.lchild!=null){
        findPath(root.lchild,number,res,curr);
    }
    if(root.rchild!=null){
        findPath(root.rchild,number,res,curr);
    }
    //将原先最后一个进入的节点删掉，然后回溯
    res.pop();
    // return;

}
function printRes(res){
    for(let i=0;i<res.length;i++){
        console.log(res[i]);
    }
}
var res = findPath(root,9,res,0);