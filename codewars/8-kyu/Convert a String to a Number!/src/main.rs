// Convert a String to a Number!

// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// Link: https://www.codewars.com/kata/544675c6f971f7399a000e79/train/rust
fn string_to_number(s: &str) -> i32 {
    return s.parse::<i32>().unwrap()
}

#[cfg(test)]
mod tests {
    use super::string_to_number;
    use rand::prelude::*;

    #[test]
    fn returns_expected() {
      assert_eq!(string_to_number("1234"), 1234);
      assert_eq!(string_to_number("605"), 605);
      assert_eq!(string_to_number("1405"), 1405);
      assert_eq!(string_to_number("-7"), -7);
    }

    #[test]
    fn works_on_random() {
        let mut rng = thread_rng();
        for _ in 0..5 {
            let num : i32 = rng.gen();
            let input = num.to_string();
            assert_eq!(string_to_number(&input), num);
        }        
    }
}