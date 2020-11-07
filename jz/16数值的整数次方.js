var base = -2.0,ex = -2;
function Power(base,ex){
    //base为0
    if(equal(base,0)){
        return 0;//指定0的任何次方均为0
    }else{
        //ex的限定条件
        if(equal(base,0)){
            return 1;
        }else if(ex>0){
            return subFunc(base,ex);
        }else{
            ex = -1*ex;
            var res = subFunc(base,ex);
            return 1/res;
        }
    }
}
//将重复的行为抽出来作为单独函数
function subFunc(base,ex){
    var res = 1;
    for(let i=0;i<ex;i++){
        res*=base;
    }
    return res;
}
//double的比较需要识别精度
function equal(base, base2){
    if((base - base2) > -0.0000001 && 
    (base1-base2)<0.0000001){
        return true;
    }else{
        return false;
    }

}
var res = Power(base,ex);
console.log(res);