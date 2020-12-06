var arr = [1, 2, 4, 7, 11, 15];

function findNumS(arr, s) {
    if (arr.length < 2) {
        return null;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === s) {
                console.log(arr[i] + " " + arr[j]);
                break;
            }
        }
    }
}
let res = findNumS(arr, 15);
//双指针优化版
var arr = [1, 2, 4, 7, 11, 15];

function findNumS(arr, s) {
    if (arr.length < 2) {
        return null;
    }
    //双指针法
    for (let left = 0, right = arr.length - 1; left < right;) {
        if (arr[left] + arr[right] > s) {
            right--;
        } else if (arr[left] + arr[right] < s) {
            left++;
        } else {
            console.log(arr[left] + " " + arr[right]);
            break;
        }
    }
}
let res = findNumS(arr, 15);