function IndexSumReturnFunction(nums, target) {

    let result = [];

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) == target) {
                result.push([i, j]);
            }
        }
    }

    return result;

}

let nums = [2, 7, 11, 15];
let target = 9;
// let nums = [3, 2, 4];
//let target = 6;
// let nums = [3, 3];
// let target = 6;
//let nums = [1,2,3,4,5];
//let target = 9;
console.log(IndexSumReturnFunction(nums, target));