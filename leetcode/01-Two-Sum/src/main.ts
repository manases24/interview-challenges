// Two Sum
// Link: https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

export function twoSum(nums: number[], target: number): number[] {
  const hasHMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hasHMap.has(complement)) {
      return [hasHMap.get(complement), i];
    }
    hasHMap.set(nums[i], i);
  }
  return [];
}

// export function twoSum1(nums: number[], target: number): number[] {
//   const num_to_index: { [key: number]: number } = {};

//   for (let index = 0; index < nums.length; index++) {
//     const complement = target - nums[index];

//     // Verifica si el complemento existe en el HashMap
//     if (complement in num_to_index) {
//       return [num_to_index[complement], index];
//     }

//     num_to_index[nums[index]] = index;
//   }

//   return [];
// }
