//jshint esversion: 6

function confirmEnding(str, target) {
   return str.substring(str.length - target.length) === target; 
}

confirmEnding("Open sesame", "same");
