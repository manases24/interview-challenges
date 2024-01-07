pub struct Solution;

impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        let mut result = 0;
        let mut prev_value = 0;

        for c in s.chars().rev() {
            let value = match c {
                'I' => 1,
                'V' => 5,
                'X' => 10,
                'L' => 50,
                'C' => 100,
                'D' => 500,
                'M' => 1000,
                _ => panic!("Invalid Roman numeral character"),
            };

            if value < prev_value {
                result -= value;
            } else {
                result += value;
            }

            prev_value = value;
        }

        result
    }
}

// Módulo de pruebas
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case_1() {
        let input = "III".to_string();
        let output = Solution::roman_to_int(input);
        assert_eq!(output, 3);
    }

    #[test]
    fn test_case_2() {
        let input = "IV".to_string();
        let output = Solution::roman_to_int(input);
        assert_eq!(output, 4);
    }

    #[test]
    fn test_case_3() {
        let input = "IX".to_string();
        let output = Solution::roman_to_int(input);
        assert_eq!(output, 9);
    }

    #[test]
    fn test_case_4() {
        let input = "LVIII".to_string();
        let output = Solution::roman_to_int(input);
        assert_eq!(output, 58);
    }

    #[test]
    fn test_case_5() {
        let input = "MCMXCIV".to_string();
        let output = Solution::roman_to_int(input);
        assert_eq!(output, 1994);
    }
}
