public class Solution
{
    /// <summary>
    /// Given an integer x, return true if x is a palindrome, and false otherwise.
    ///
    /// Example 1:
    /// Input: x = 121
    /// Output: true
    /// Explanation: 121 reads as 121 from left to right and from right to left.
    ///
    /// Example 2:
    /// Input: x = -121
    /// Output: false
    /// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
    ///
    /// Example 3:
    /// Input: x = 10
    /// Output: false
    /// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
    /// </summary>
    /// <param name="x">The integer to check</param>
    /// <returns>True if the integer is a palindrome, false otherwise</returns>
    public bool IsPalindrome(int x)
    {
        if (x < 0)
        {
            return false;
        }

        string str_x = x.ToString();
        int start_i = 0;
        int end_i = str_x.Length - 1;

        while (start_i < end_i)
        {
            if (str_x[start_i] != str_x[end_i])
            {
                return false;
            }
            start_i++;
            end_i--;
        }
        return true;
    }
}