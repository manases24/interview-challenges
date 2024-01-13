// Vowel Count
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
// Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/rust

fn get_count(string: &str) -> usize {
    let vowels = "aeiouAEIOU";
    let mut vowels_count: usize = 0;

    for v in string.chars() {
        if vowels.contains(v) {
            vowels_count += 1;
        }
    }

    vowels_count
}

#[test]
fn get_count_tests() {
    assert_eq!(get_count("Ash - Live at Bonjuk Bay"), 7);
    assert_eq!(get_count("Belo Horizonte"), 6);
    assert_eq!(get_count("Google"), 3);
}
