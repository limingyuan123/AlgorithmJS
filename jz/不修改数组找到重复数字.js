var nums = [2,3,5,4,3,2,6,7];
function findDupNotRe(nums){
    var nums2 = new Array(nums.length);
    var res = new Set();
    for(let i=0;i<nums.length;i++){
        //先判断nums2的此处下标是否有值
        if(nums2[nums[i]]!=undefined){
            res.add(nums[i]);
        }else{
            nums2[nums[i]] = nums[i];
        }
    }    
    return res;
}
var res = findDupNotRe(nums);
console.log(res);