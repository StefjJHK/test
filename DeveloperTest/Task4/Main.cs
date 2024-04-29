using System.Text;

namespace Task4
{
    public static class Main
    {
        public static string ReverseString(string s)
        {
            var builder = new StringBuilder(s.Length);

            for (int i = s.Length - 1; i >= 0; i--)
                builder.Append(s[i]);

            return builder.ToString();
        }

        public static bool IsPalindrome(string s)
        {
            var reversed = ReverseString(s);

            return s == reversed;
        }

        public static IEnumerable<int> MissingElements(int[] arr)
        {
            for(var i = 1; i < arr.Length; i++) 
            {
                if (arr[i] - 1 != arr[i - 1])
                {
                    yield return arr[i-1] + 1;
                }
            }

        }
    }
}
