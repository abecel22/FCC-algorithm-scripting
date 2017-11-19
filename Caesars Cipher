
//jshint esversion: 6
function rot13(str) { 

  let decrypt = [];
  const regEx = /[A-Z]/;
  str = str.split('');
  for(let x in str) {
    if(regEx.test(str[x])) {
      decrypt.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
    } else {
      decrypt.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, decrypt);
  return str;
  }

// Change the inputs below to test
rot13("SERR PBQR PNZC");
