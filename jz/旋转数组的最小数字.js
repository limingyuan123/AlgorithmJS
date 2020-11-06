//1 2 3 4 5->3 4 5 1 2 
//傻瓜法，不可用
var nums = [3,4,5,6,7,8,9,0,1,2];
// function findSmallNum(nums){
//     var min = Number.MAX_VALUE;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]<min){
//             min = nums[i]
//         }
//     }
//     return min;
// }
// var res = findSmallNum(nums);
// console.log(res);

//利用到1.有序数组2.旋转后的结果 改良版
// function findSmallNum1(nums){
//     if(nums.length == 1){
//         return nums[0];
//     }
//     var min = nums[0];
//     for(let i=1;i<nums.length;i++){
//         if(nums[i]<min){
//             min = nums[i]
//             break;
//         }
//     }
//     return min;
// }
// var res = findSmallNum1(nums);
// console.log(res);

//jz官方，二分查找法
function findSmallNum2(nums) { 
    if(nums.length == 1) {
        return nums[0];
    }
    var pointer1 = 0;
    var pointer2 = nums.length-1;
    while(pointer1!=(pointer2-1)){
        var mid = parseInt((pointer2 - pointer1)/2) + pointer1;//js的取整只是使用/不行，需要使用parseInt方法
        if(nums[mid]>=nums[pointer1]){
            pointer1 = mid;
        }else{
            pointer2 = mid;
        }
    }
    return nums[pointer2];
}
var res = findSmallNum2(nums);
console.log(res);