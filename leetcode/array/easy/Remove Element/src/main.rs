// Remove Element

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. 
// Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Link: https://leetcode.com/problems/remove-element/

struct Solution;

impl Solution {
    // La función `remove_element` toma una referencia mutable a un vector (`&mut Vec<i32>`) y un valor a eliminar (`val`)
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        // Contador `k` que representará la longitud del nuevo vector sin los elementos igual a `val`
        let mut k = 0;

        // Iteramos sobre cada elemento del vector `nums`
        for i in 0..nums.len() {
            // Verificamos si el elemento actual no es igual a `val`
            if nums[i] != val {
                // Si el elemento no es igual a `val`, lo colocamos en la posición `k` del vector
                nums[k] = nums[i];                
                // Incrementamos `k` para indicar que hemos agregado un elemento al nuevo vector
                k += 1;
            }
        }

        // longitud del nuevo vector sin los elementos igual a `val`
        k as i32
    }
}





