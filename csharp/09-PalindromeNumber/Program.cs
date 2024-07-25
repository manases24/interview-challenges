class Program
{
    static void Main()
    {
        Solution solution = new Solution();

        int number1 = 121;
        bool result1 = solution.IsPalindrome(number1);
        Console.WriteLine($"{number1} es un palíndromo: {result1}");

        int number2 = -121;
        bool result2 = solution.IsPalindrome(number2);
        Console.WriteLine($"{number2} es un palíndromo: {result2}");

        int number3 = 10;
        bool result3 = solution.IsPalindrome(number3);
        Console.WriteLine($"{number3} es un palíndromo: {result3}");
    }
}