

function palindrome(str) {
  // Good luck!
  var updatedString= str.toLowerCase().trim().replace(/[^a-z0-9]+/gi, '');
  var arrayForward = str.split("");
  var arrayBackward = arrayForward.reverse();
  var newString = arrayBackward.join().toLowerCase().trim().replace(/[^a-z0-9]+/gi, '');

  if (newString === updatedString){
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("Wow"));
