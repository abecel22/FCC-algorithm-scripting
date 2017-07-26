function reverseString(str) {
  var array = str.split("");
  var reverse= array.reverse();
  var connect = reverse.join("");
  return connect;
}

console.log(reverseString("This really works!"));

