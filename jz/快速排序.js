var nums = [12, 2, 56, 7, 34, 14, 3]

function quickSort(nums, start, end) {
    if (start == end) {
        return;
    }
    var log = nums[start]; //选定的数
    var i = start;
    var j = end;
    var flag = 0; //0为j 1为i
    while (i != j) {
        if (flag == 0) {
            if (nums[j] < log) {
                var temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                i++;
                flag = 1;
            } else {
                j--;
            }
        } else {
            if (nums[i] > log) {
                var temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                j--;
                flag = 0;
            } else {
                i++;
            }
        }
    }
    nums[i] = log;
    if (i > start)
        quickSort(nums, 0, i - 1);
    if (i < end)
        quickSort(nums, i + 1, end);
    return nums;
}
var res = quickSort(nums, 0, nums.length - 1);
console.log(res);