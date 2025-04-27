function isPalindrome(number) {
    if (number < 100 || number > 999) {
      return false;
    }
    const str = number.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  console.log(isPalindrome(121));
  console.log(isPalindrome(123));
  console.log(isPalindrome(787));