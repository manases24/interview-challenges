struct Solution;

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
// Link: https://leetcode.com/problems/binary-search/

impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        let mut left = 0;
        let mut right = nums.len() as i32;

        while left < right {
            let mid = left + (right - left) / 2;
            if nums[mid as usize] == target {
                return mid as i32;
            } else if nums[mid as usize] < target {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        -1
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_binary_search_found() {
        let nums = vec![-1, 0, 3, 5, 9, 12];
        let target = 9;

        assert_eq!(Solution::search(nums, target), 4);
    }

    #[test]
    fn test_binary_search_not_found() {
        let nums = vec![-1, 0, 3, 5, 9, 12];
        let target = 2;

        assert_eq!(Solution::search(nums, target), -1);
    }
}
