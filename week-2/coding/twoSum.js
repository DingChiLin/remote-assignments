function twoSum(nums, target){
    hash = {}
    for (i in nums) {
        i = parseInt(i);
        n = nums[i];
        if (n in hash) {
            return [hash[n], i]
        }
        hash[target - n] = i
    }
    return null;
}

const result = twoSum([1, 2, 11, 7, 15], 9); // could be not sorted
console.log(result) // 1, 3