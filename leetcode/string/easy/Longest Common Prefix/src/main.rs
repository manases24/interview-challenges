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
    pub fn longest_common_prefix(input: Vec<String>) -> String {
        // Utilizamos `into_iter()` para obtener un iterador que consume el vector.
        // Luego, aplicamos `reduce` para reducir el vector a un solo resultado.
        input.into_iter().reduce(|acc, cur| {
            // Combinamos caracteres de las dos cadenas en tuplas con `zip`.
            // `take_while` se utiliza para tomar caracteres mientras sean iguales.
            // `map` se utiliza para extraer el primer elemento de cada tupla (caracteres iguales).
            // Finalmente, `collect` se utiliza para convertir los caracteres en una cadena.
            acc.chars()
               .zip(cur.chars())
               .take_while(|(a, c)| a == c)
               .map(|(c, _)| c)
               .collect()
        }).unwrap()  // Desenvolvemos el resultado final de `reduce` con `unwrap`.
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