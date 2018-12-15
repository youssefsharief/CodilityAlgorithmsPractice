const getPalindrome = n => parseInt(n.toString().split('').reverse().join(''));

var palindromeChainLength = function(n) {
  let i = 0
  let palindrome = getPalindrome(n)

  while (palindrome !== n) {
    n += palindrome;
    palindrome = getPalindrome(n)
    ++i;
  }
  return i;
};



