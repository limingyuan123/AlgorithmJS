function sum1ToN(n){
    if(n<1){
        return null;
    }
    return (n+Math.pow(n,2))>>1;
}
let res = sum1ToN(3);
console.log(res);