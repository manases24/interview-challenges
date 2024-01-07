// Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string ""

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings

// Link: https://leetcode.com/problems/longest-common-prefix/
impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        strs.into_iter().reduce(|acc, cur| {
            acc.chars()
               .zip(cur.chars())
               .take_while(|(a, c)| a == c)
               .map(|(c, _)| c)
               .collect()
        }).unwrap()  
    }
}


// impl Solution {
//     pub fn longest_common_prefix(strs: Vec<String>) -> String {
//         if strs.is_empty() {
//             return String::new();
//         }

//         let first_str = &strs[0];
//         let mut prefix = String::new();

//         for (i, value) in first_str.chars().enumerate() {
//             if strs.iter().all(|s| s.starts_with(&first_str[..=i])) {
//                 prefix.push(value);
//             } else {
//                 break;
//             }
//         }

//         prefix
//     }
// }



fn main() {
    longest_common_prefix(vec!["flower","flow","flight"]);
}

#[cfg(test)]
mod tests {
    use super::*;

  
}