var n = 3;
function consoleN(n){
    if(n<=0){return null}
    var re = 1;
    for(let i=0;i<n;i++){
        re*=10;
    }
    for(let i=1;i<re;i++){
        console.log(i);
    }
}
var res = consoleN(n);
// console.log(res);