
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var diff = str.length-num+3;
  var truncated = str.slice(0,-diff);

  if (num <= 2){
    return str.slice(0, num) + "...";
  } else if (num >= str.length){
    return str;
  } else if (num >= 3){
  truncated = truncated +"...";
  return truncated;
}
}
console.log(truncateString("Celina", 6));
