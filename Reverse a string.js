//jshint esversion: 6
function reverseString(str) {
  const newStr = str.split('').reverse().join('');
  return newStr;
}

reverseString("hello");

