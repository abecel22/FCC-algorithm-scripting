//jshint esversion: 6
function mutation(arr) {
  return arr[1].toLowerCase()
        .split('').every(letter => {
        return arr[0].toLowerCase().indexOf(letter) !== -1;
  });
}

mutation(["Alien", "line"]);
