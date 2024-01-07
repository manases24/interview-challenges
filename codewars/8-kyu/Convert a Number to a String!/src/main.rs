// Convert a Number to a String!

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// Link: https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/rust

fn number_to_string(i: i32) -> String {
    return i.to_string();
}

#[cfg(test)]
mod tests {
    use super::number_to_string;
        
    fn dotest(n: i32, expected: &str) {
        let actual = number_to_string(n);
        assert!(actual == expected, "With n = {n}\nExpected \"{expected}\" but got \"{actual}\"")
    }

    #[test]
    fn fixed_tests() {
        dotest(67, "67");
        dotest(79585, "79585");
        dotest(1+2, "3");
        dotest(1-2, "-1");
    }
}
