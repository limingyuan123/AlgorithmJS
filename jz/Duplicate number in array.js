//1.暴力法
var nums = [2,3,1,0,2,5,3];//0 1 2 2 3 3 5
var res = new Set();
var k =0;
//冒泡
for(var i = nums.length-1;i>=0;i--){
    for(var j = 0;j < i;j++){
        if(nums[j]>nums[j+1]){
            var temp = nums[j];
            nums[j] = nums[j+1];
            nums[j+1] = temp;
        }
    }
}

for(var i=0;i<nums.length-1;i++){
    if(nums[i] == nums[i+1]){
        res.add(nums[i]);
    }
}

console.log(res);

//2.hash法
var nums = [2,3,1,0,2,5,3];
var res = new Set();
var res1 = new Set();
var bo = new Boolean();
for(var i=0;i<nums.length;i++){
    let l1 = res.size;
    res.add(nums[i]);
    let l2 = res.size;
    if(l1==l2){
        res1.add(nums[i]);
    }
}
console.log(res1);