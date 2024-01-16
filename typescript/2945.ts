/*
Find Maximum Non-decreasing Array Length

You are given a 0-indexed integer array nums.
You can perform any number of operations, where each operation involves selecting a subarray of the array and replacing it with the sum of its elements. For example, if the given array is [1,3,5,6] and you select subarray [3,5] the array will convert to [1,8,6].
Return the maximum length of a non-decreasing array that can be made after applying operations.
A subarray is a contiguous non-empty sequence of elements within an array.
*/

function findMaximumLength(nums: number[]): number {
    let dp = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] >= nums[i - 1]) {
            dp[i] = Math.max(dp[i], dp[i - 1] + 1);
        }
    }
    return Math.max(...dp);
};