
//jshint esversion: 6
function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/[^a-z0-9]+/gi, '');
  let newStr = str.split('').reverse().join('');
 
  return newStr === str;
}

palindrome("eye");
