
function chunkArrayInGroups(arr, size) {
  // Break it up.
  for (var i= 0; i< arr.length; i++){
    splitArr = arr.slice(size, i);
  }
  return splitArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
